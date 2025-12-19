-- =====================================================
-- CORREÇÃO DE TAMANHO DE FONTES NOS POSTS DO BLOG
-- DATA: 19 de Dezembro de 2025
-- OBJETIVO: Ajustar H2 e H3 para tamanhos proporcionais
-- =====================================================

-- BACKUP AUTOMÁTICO (o Supabase mantém histórico)
-- Este SQL vai atualizar TODOS os posts existentes

-- =====================================================
-- ESTRATÉGIA 1: Adicionar classes Tailwind inline
-- =====================================================

-- Atualizar H2: adicionar classe para text-lg (18px)
UPDATE blog_posts
SET content = REPLACE(
  REPLACE(
    REPLACE(content, '<h2>', '<h2 class="text-lg font-bold text-gray-900 mt-10 mb-5 leading-snug">'),
    '<h2 class="', '<h2 class="text-lg font-bold text-gray-900 mt-10 mb-5 leading-snug '
  ),
  '<h2 style="', '<h2 class="text-lg font-bold text-gray-900 mt-10 mb-5 leading-snug" style="'
)
WHERE content LIKE '%<h2>%' OR content LIKE '%<h2 %';

-- Atualizar H3: adicionar classe para text-base (16px) com bold
UPDATE blog_posts
SET content = REPLACE(
  REPLACE(
    REPLACE(content, '<h3>', '<h3 class="text-base font-bold text-gray-900 mt-8 mb-4 leading-normal">'),
    '<h3 class="', '<h3 class="text-base font-bold text-gray-900 mt-8 mb-4 leading-normal '
  ),
  '<h3 style="', '<h3 class="text-base font-bold text-gray-900 mt-8 mb-4 leading-normal" style="'
)
WHERE content LIKE '%<h3>%' OR content LIKE '%<h3 %';

-- =====================================================
-- ESTRATÉGIA 2: Adicionar estilos inline (fallback)
-- =====================================================

-- Se ainda houver H2 sem estilo, adicionar inline
UPDATE blog_posts
SET content = REPLACE(content,
  '<h2>',
  '<h2 style="font-size: 1.125rem; font-weight: 700; color: #111827; margin-top: 2.5rem; margin-bottom: 1.25rem; line-height: 1.625;">'
)
WHERE content LIKE '%<h2>%'
  AND content NOT LIKE '%<h2 class%'
  AND content NOT LIKE '%<h2 style%';

-- Se ainda houver H3 sem estilo, adicionar inline
UPDATE blog_posts
SET content = REPLACE(content,
  '<h3>',
  '<h3 style="font-size: 1rem; font-weight: 700; color: #111827; margin-top: 2rem; margin-bottom: 1rem; line-height: 1.5;">'
)
WHERE content LIKE '%<h3>%'
  AND content NOT LIKE '%<h3 class%'
  AND content NOT LIKE '%<h3 style%';

-- =====================================================
-- VERIFICAÇÃO
-- =====================================================

-- Ver quantos posts foram atualizados com H2
SELECT
  COUNT(*) as posts_com_h2,
  COUNT(CASE WHEN content LIKE '%<h2 class="text-lg%' THEN 1 END) as h2_com_classes
FROM blog_posts
WHERE is_published = true;

-- Ver quantos posts foram atualizados com H3
SELECT
  COUNT(*) as posts_com_h3,
  COUNT(CASE WHEN content LIKE '%<h3 class="text-base%' THEN 1 END) as h3_com_classes
FROM blog_posts
WHERE is_published = true;

-- Ver exemplo de um post atualizado
SELECT
  title,
  SUBSTRING(content FROM POSITION('<h2' IN content) FOR 150) as exemplo_h2
FROM blog_posts
WHERE content LIKE '%<h2%'
  AND is_published = true
LIMIT 1;

-- =====================================================
-- OBSERVAÇÕES:
-- =====================================================
--
-- ✅ Classes Tailwind aplicadas:
--    H2: text-lg (18px) - 25% menor que antes
--    H3: text-base (16px) + bold - destaque pelo peso
--
-- ✅ Espaçamento ajustado:
--    H2: mt-10 mb-5 (mais respiração)
--    H3: mt-8 mb-4 (proporcional)
--
-- ✅ Hierarquia corrigida:
--    Título principal: 30px
--    H2 (conteúdo): 18px
--    H3 (conteúdo): 16px bold
--    Texto: 16px normal
--
-- 🔄 Para reverter (se necessário):
--    Basta remover as classes dos H2/H3
--    ou restaurar backup do Supabase
--
-- =====================================================
