-- =====================================================
-- IMAGENS PARA OS 2 ARTIGOS FALTANTES
-- Imagens específicas e diferentes das anteriores
-- =====================================================

-- Artigo: Como se preparar para uma transição de carreira com qualidade e saúde
-- Imagem: Pessoa em ponte entre dois lugares (metáfora de transição)
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80'
WHERE slug LIKE '%transicao%carreira%'
   OR slug LIKE '%preparar%transicao%'
   OR title LIKE '%transição de carreira%qualidade%saúde%';
-- Fotógrafo: Marvin Meyer
-- Tema: Equipe colaborando em transição, crescimento profissional saudável

-- Artigo: A importância da pausa em sua vida diária: produtividade real vem do descanso
-- Imagem: Pessoa relaxando olhando pela janela (pausa contemplativa)
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1200&q=80'
WHERE slug LIKE '%importancia%pausa%'
   OR slug LIKE '%pausa%vida%diaria%'
   OR title LIKE '%importância da pausa%vida diária%';
-- Fotógrafo: Thought Catalog
-- Tema: Momento de pausa e reflexão, olhando pela janela

-- =====================================================
-- VERIFICAÇÃO ESPECÍFICA DESTES 2 ARTIGOS
-- =====================================================

SELECT
  slug,
  title,
  cover_image,
  CASE
    WHEN cover_image IS NOT NULL THEN '✓ IMAGEM OK'
    ELSE '✗ SEM IMAGEM'
  END as status
FROM blog_posts
WHERE slug LIKE '%transicao%'
   OR slug LIKE '%pausa%'
   OR title LIKE '%transição%'
   OR title LIKE '%pausa%'
ORDER BY title;
