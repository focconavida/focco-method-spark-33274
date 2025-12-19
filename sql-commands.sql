-- ====================================================================
-- COMANDOS SQL PARA ATUALIZAR TAGS H2 E H3 NO BLOG FOCCO
-- ====================================================================
-- Execute estes comandos no SQL Editor do Supabase:
-- https://app.supabase.com/project/vtsqvmmhgekwdwihyaax/editor/sql
-- ====================================================================

-- 1. ATUALIZAR TAGS H2
-- Adiciona classes Tailwind para formatação consistente
UPDATE blog_posts
SET content = REPLACE(
  REPLACE(
    REPLACE(
      content,
      '<h2>',
      '<h2 class="text-lg font-bold text-gray-900 mt-10 mb-5 leading-snug">'
    ),
    '<h2 class="',
    '<h2 class="text-lg font-bold text-gray-900 mt-10 mb-5 leading-snug '
  ),
  '<h2 style="',
  '<h2 class="text-lg font-bold text-gray-900 mt-10 mb-5 leading-snug" style="'
)
WHERE content LIKE '%<h2>%' OR content LIKE '%<h2 %';

-- Verificar resultado H2
SELECT COUNT(*) as posts_h2_atualizados
FROM blog_posts
WHERE content LIKE '%<h2 class="text-lg%';

-- ====================================================================

-- 2. ATUALIZAR TAGS H3
-- Adiciona classes Tailwind para formatação consistente
UPDATE blog_posts
SET content = REPLACE(
  REPLACE(
    REPLACE(
      content,
      '<h3>',
      '<h3 class="text-base font-bold text-gray-900 mt-8 mb-4 leading-normal">'
    ),
    '<h3 class="',
    '<h3 class="text-base font-bold text-gray-900 mt-8 mb-4 leading-normal '
  ),
  '<h3 style="',
  '<h3 class="text-base font-bold text-gray-900 mt-8 mb-4 leading-normal" style="'
)
WHERE content LIKE '%<h3>%' OR content LIKE '%<h3 %';

-- Verificar resultado H3
SELECT COUNT(*) as posts_h3_atualizados
FROM blog_posts
WHERE content LIKE '%<h3 class="text-base%';

-- ====================================================================

-- 3. VERIFICAÇÃO DETALHADA DOS ÚLTIMOS 10 POSTS PUBLICADOS
SELECT
  title,
  CASE
    WHEN content LIKE '%<h2 class="text-lg%' THEN 'H2 Atualizado ✓'
    ELSE 'H2 Pendente'
  END as status_h2,
  CASE
    WHEN content LIKE '%<h3 class="text-base%' THEN 'H3 Atualizado ✓'
    ELSE 'H3 Pendente'
  END as status_h3,
  published_at
FROM blog_posts
WHERE is_published = true
ORDER BY published_at DESC
LIMIT 10;

-- ====================================================================

-- 4. RESUMO GERAL
SELECT
  COUNT(*) as total_posts,
  COUNT(*) FILTER (WHERE content LIKE '%<h2 class="text-lg%') as posts_h2_ok,
  COUNT(*) FILTER (WHERE content LIKE '%<h3 class="text-base%') as posts_h3_ok,
  COUNT(*) FILTER (WHERE is_published = true) as posts_publicados
FROM blog_posts;

-- ====================================================================
