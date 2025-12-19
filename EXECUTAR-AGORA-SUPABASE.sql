-- =====================================================
-- CORREÇÃO DE TAMANHOS DE FONTE - BLOG FOCCO
-- COPIE E COLE NO SUPABASE SQL EDITOR
-- =====================================================

-- PASSO 1: Atualizar H2 (reduzir de 24px para 18px)
UPDATE blog_posts
SET content = REPLACE(content, '<h2>', '<h2 class="!text-lg !font-bold !text-gray-900 !mt-10 !mb-5 !leading-snug">')
WHERE content LIKE '%<h2>%';

-- PASSO 2: Atualizar H3 (destacar com bold)
UPDATE blog_posts
SET content = REPLACE(content, '<h3>', '<h3 class="!text-base !font-bold !text-gray-900 !mt-8 !mb-4 !leading-normal">')
WHERE content LIKE '%<h3>%';

-- PASSO 3: Verificar quantos posts foram atualizados
SELECT
  COUNT(*) FILTER (WHERE content LIKE '%<h2 class%') as h2_atualizados,
  COUNT(*) FILTER (WHERE content LIKE '%<h3 class%') as h3_atualizados,
  COUNT(*) as total_posts
FROM blog_posts
WHERE is_published = true;

-- PASSO 4: Ver exemplo de post atualizado
SELECT
  title,
  SUBSTRING(content FROM 1 FOR 300) as preview
FROM blog_posts
WHERE content LIKE '%<h2 class%'
LIMIT 1;
