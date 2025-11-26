-- ============================================
-- SCHEMA GOOGLE ADS REPORTS
-- Sistema de armazenamento de relatórios CSV
-- ============================================

-- Tabela principal: campanhas
CREATE TABLE IF NOT EXISTS google_ads_campaigns (
  id BIGSERIAL PRIMARY KEY,
  campaign_name TEXT NOT NULL,
  campaign_status TEXT,
  budget NUMERIC(10,2),
  budget_type TEXT,
  status TEXT,
  optimization_score NUMERIC(5,2),
  campaign_type TEXT,
  clicks INTEGER DEFAULT 0,
  impressions INTEGER DEFAULT 0,
  ctr NUMERIC(5,2),
  avg_cpc NUMERIC(10,2),
  cost NUMERIC(10,2) DEFAULT 0,
  conversion_rate NUMERIC(5,2),
  conversions NUMERIC(10,2) DEFAULT 0,
  cost_per_conversion NUMERIC(10,2),
  date_start DATE,
  date_end DATE,
  uploaded_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(campaign_name, date_start, date_end)
);

-- Tabela: anúncios
CREATE TABLE IF NOT EXISTS google_ads_ads (
  id BIGSERIAL PRIMARY KEY,
  campaign_name TEXT NOT NULL,
  ad_group TEXT NOT NULL,
  ad_status TEXT,
  final_url TEXT,
  headline_1 TEXT,
  headline_2 TEXT,
  headline_3 TEXT,
  description_1 TEXT,
  description_2 TEXT,
  ad_quality TEXT,
  ad_type TEXT,
  clicks INTEGER DEFAULT 0,
  impressions INTEGER DEFAULT 0,
  ctr NUMERIC(5,2),
  avg_cpc NUMERIC(10,2),
  cost NUMERIC(10,2) DEFAULT 0,
  conversion_rate NUMERIC(5,2),
  conversions NUMERIC(10,2) DEFAULT 0,
  cost_per_conversion NUMERIC(10,2),
  date_start DATE,
  date_end DATE,
  uploaded_at TIMESTAMP DEFAULT NOW()
);

-- Tabela: palavras-chave
CREATE TABLE IF NOT EXISTS google_ads_keywords (
  id BIGSERIAL PRIMARY KEY,
  keyword_status TEXT,
  keyword TEXT NOT NULL,
  match_type TEXT,
  campaign_name TEXT NOT NULL,
  ad_group TEXT NOT NULL,
  status TEXT,
  final_url TEXT,
  clicks INTEGER DEFAULT 0,
  impressions INTEGER DEFAULT 0,
  ctr NUMERIC(5,2),
  avg_cpc NUMERIC(10,2),
  cost NUMERIC(10,2) DEFAULT 0,
  max_cpc NUMERIC(10,2),
  conversion_rate NUMERIC(5,2),
  conversions NUMERIC(10,2) DEFAULT 0,
  cost_per_conversion NUMERIC(10,2),
  date_start DATE,
  date_end DATE,
  uploaded_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(keyword, campaign_name, ad_group, date_start, date_end)
);

-- Tabela: termos de pesquisa
CREATE TABLE IF NOT EXISTS google_ads_search_terms (
  id BIGSERIAL PRIMARY KEY,
  search_term TEXT NOT NULL,
  keyword TEXT,
  match_type TEXT,
  campaign_name TEXT NOT NULL,
  ad_group TEXT NOT NULL,
  clicks INTEGER DEFAULT 0,
  impressions INTEGER DEFAULT 0,
  ctr NUMERIC(5,2),
  avg_cpc NUMERIC(10,2),
  cost NUMERIC(10,2) DEFAULT 0,
  conversion_rate NUMERIC(5,2),
  conversions NUMERIC(10,2) DEFAULT 0,
  cost_per_conversion NUMERIC(10,2),
  date_start DATE,
  date_end DATE,
  uploaded_at TIMESTAMP DEFAULT NOW()
);

-- Tabela: histórico de uploads
-- Tipos suportados: campaign, ads, keywords, search_terms
CREATE TABLE IF NOT EXISTS google_ads_upload_history (
  id BIGSERIAL PRIMARY KEY,
  report_type TEXT NOT NULL,
  filename TEXT NOT NULL,
  rows_imported INTEGER DEFAULT 0,
  date_start DATE,
  date_end DATE,
  uploaded_at TIMESTAMP DEFAULT NOW(),
  status TEXT DEFAULT 'success',
  error_message TEXT
);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_campaigns_dates ON google_ads_campaigns(date_start, date_end);
CREATE INDEX IF NOT EXISTS idx_campaigns_name ON google_ads_campaigns(campaign_name);
CREATE INDEX IF NOT EXISTS idx_ads_campaign ON google_ads_ads(campaign_name);
CREATE INDEX IF NOT EXISTS idx_ads_dates ON google_ads_ads(date_start, date_end);
CREATE INDEX IF NOT EXISTS idx_keywords_campaign ON google_ads_keywords(campaign_name);
CREATE INDEX IF NOT EXISTS idx_keywords_dates ON google_ads_keywords(date_start, date_end);
CREATE INDEX IF NOT EXISTS idx_keywords_status ON google_ads_keywords(keyword_status);
CREATE INDEX IF NOT EXISTS idx_search_terms_dates ON google_ads_search_terms(date_start, date_end);
CREATE INDEX IF NOT EXISTS idx_upload_history_type ON google_ads_upload_history(report_type);

-- View: resumo de performance por período
CREATE OR REPLACE VIEW google_ads_performance_summary AS
SELECT
  date_start,
  date_end,
  SUM(clicks) as total_clicks,
  SUM(impressions) as total_impressions,
  ROUND(AVG(ctr), 2) as avg_ctr,
  ROUND(AVG(avg_cpc), 2) as avg_cpc,
  SUM(cost) as total_cost,
  ROUND(AVG(conversion_rate), 2) as avg_conversion_rate,
  SUM(conversions) as total_conversions,
  CASE
    WHEN SUM(conversions) > 0 THEN ROUND(SUM(cost) / SUM(conversions), 2)
    ELSE 0
  END as cost_per_conversion
FROM google_ads_campaigns
GROUP BY date_start, date_end
ORDER BY date_start DESC;

-- View: top palavras-chave por performance
CREATE OR REPLACE VIEW google_ads_top_keywords AS
SELECT
  keyword,
  keyword_status,
  match_type,
  campaign_name,
  SUM(clicks) as total_clicks,
  SUM(impressions) as total_impressions,
  ROUND(AVG(ctr), 2) as avg_ctr,
  ROUND(AVG(avg_cpc), 2) as avg_cpc,
  SUM(cost) as total_cost,
  SUM(conversions) as total_conversions,
  CASE
    WHEN SUM(conversions) > 0 THEN ROUND(SUM(cost) / SUM(conversions), 2)
    ELSE 0
  END as cost_per_conversion
FROM google_ads_keywords
WHERE keyword_status = 'Ativado'
GROUP BY keyword, keyword_status, match_type, campaign_name
HAVING SUM(clicks) > 0
ORDER BY total_conversions DESC, total_clicks DESC
LIMIT 20;

-- View: anúncios com melhor performance
CREATE OR REPLACE VIEW google_ads_top_ads AS
SELECT
  campaign_name,
  ad_group,
  headline_1,
  headline_2,
  ad_quality,
  SUM(clicks) as total_clicks,
  SUM(impressions) as total_impressions,
  ROUND(AVG(ctr), 2) as avg_ctr,
  ROUND(AVG(avg_cpc), 2) as avg_cpc,
  SUM(cost) as total_cost,
  SUM(conversions) as total_conversions
FROM google_ads_ads
WHERE ad_status = 'Ativado'
GROUP BY campaign_name, ad_group, headline_1, headline_2, ad_quality
HAVING SUM(clicks) > 0
ORDER BY total_conversions DESC, total_clicks DESC
LIMIT 10;

-- Comentários das tabelas
COMMENT ON TABLE google_ads_campaigns IS 'Dados de campanhas do Google Ads importados de CSV';
COMMENT ON TABLE google_ads_ads IS 'Dados de anúncios do Google Ads importados de CSV';
COMMENT ON TABLE google_ads_keywords IS 'Dados de palavras-chave do Google Ads importados de CSV';
COMMENT ON TABLE google_ads_search_terms IS 'Termos de pesquisa que acionaram anúncios';
COMMENT ON TABLE google_ads_upload_history IS 'Histórico de uploads de relatórios CSV';
