-- =====================================================
-- APLICAR IMAGENS REAIS DO UNSPLASH - TODOS OS ARTIGOS
-- Script completo com os 17 artigos do blog
-- =====================================================

-- ========== ARTIGOS 1-10 (JÁ PREPARADOS) ==========

-- Artigo 1: Por que procrastino tanto?
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&q=80'
WHERE slug = 'por-que-procrastino-tanto';
-- Imagem: Pessoa estressada no trabalho, mãos na cabeça com laptop
-- Fotógrafo: Tim Gouw

-- Artigo 2: A importância de aprender a dizer não
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1200&q=80'
WHERE slug = 'importancia-de-aprender-dizer-nao';
-- Imagem: Mulher profissional confiante em ambiente corporativo
-- Fotógrafo: LinkedIn Sales Navigator

-- Artigo 3: A importância da respiração consciente
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80'
WHERE slug = 'importancia-respiracao-consciente';
-- Imagem: Pessoa meditando ao ar livre, foco em mindfulness
-- Fotógrafo: Jared Rice

-- ========== ARTIGOS 4-10 (NOVOS) ==========

-- Artigo 4: Como se preparar para uma transição de carreira com qualidade e saúde
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80'
WHERE slug LIKE '%transicao%carreira%' OR slug LIKE '%preparar%transicao%' OR title LIKE '%transição de carreira%qualidade%saúde%';
-- Imagem: Equipe colaborando em transição, crescimento profissional saudável
-- Fotógrafo: Marvin Meyer

-- Artigo 5: Como diminuir seu estresse: estratégias científicas que realmente funcionam
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200&q=80'
WHERE slug LIKE '%diminuir-estresse%' OR slug LIKE '%estrategias-cientificas%';
-- Imagem: Pessoa em paz na natureza, alívio de estresse
-- Fotógrafo: Natalie Grainger

-- Artigo 6: Desenvolvendo equilíbrio emocional: a habilidade mais valiosa do século 21
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1200&q=80'
WHERE slug LIKE '%equilibrio-emocional%' OR slug LIKE '%habilidade-valiosa%';
-- Imagem: Momento de calma e reflexão, equilíbrio interior
-- Fotógrafo: Kelvin Valerio

-- Artigo 7: Por que tanta gente está ficando ansiosa? Entenda a epidemia de ansiedade
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-1584931423298-c576fda54bd2?w=1200&q=80'
WHERE slug LIKE '%epidemia-ansiedade%' OR slug LIKE '%por-que-ansiedade%' OR slug LIKE '%gente-ansiosa%';
-- Imagem: Pessoa isolada, ansiedade moderna, solidão digital
-- Fotógrafo: Priscilla Du Preez

-- Artigo 8: A importância da pausa em sua vida diária: produtividade real vem do descanso
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1200&q=80'
WHERE slug LIKE '%importancia%pausa%' OR slug LIKE '%pausa%vida%diaria%' OR title LIKE '%importância da pausa%vida diária%';
-- Imagem: Pessoa relaxando olhando pela janela, momento de pausa contemplativa
-- Fotógrafo: Thought Catalog

-- Artigo 9: Como regular suas emoções e se tornar um profissional notado sem se perder
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?w=1200&q=80'
WHERE slug LIKE '%regular-emocoes%' OR slug LIKE '%profissional-notado%';
-- Imagem: Profissional equilibrado, foco e clareza
-- Fotógrafo: Christin Hume

-- Artigo 10: Investir em mudar seu estilo de vida transforma seu futuro: o melhor ROI
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-1513346940221-6f673d962e97?w=1200&q=80'
WHERE slug LIKE '%mudar-estilo-vida%' OR slug LIKE '%melhor-roi%' OR slug LIKE '%investir-mudanca%';
-- Imagem: Corrida ao amanhecer, mudança de estilo de vida, novo começo
-- Fotógrafo: Jenny Hill

-- ========== ARTIGOS 11-17 (ANTERIORES) ==========

-- Artigo 11: Como saber se é hora de mudar de carreira
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80'
WHERE slug = 'como-saber-hora-mudar-carreira';
-- Imagem: Caminho bifurcado, escolhas, decisão profissional
-- Fotógrafo: Jens Lelie

-- Artigo 12: Técnicas simples para reduzir o estresse no dia a dia
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80'
WHERE slug = 'tecnicas-simples-reduzir-estresse';
-- Imagem: Pessoa relaxada, tranquilidade e bem-estar
-- Fotógrafo: Kinga Cichewicz

-- Artigo 13: O papel das emoções no equilíbrio da vida
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1200&q=80'
WHERE slug = 'papel-emocoes-equilibrio-vida';
-- Imagem: Rosto sereno, paz interior, equilíbrio emocional
-- Fotógrafo: Brooke Cagle

-- Artigo 14: Ansiedade: quando a modernidade cobra seu preço
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1200&q=80'
WHERE slug = 'ansiedade-modernidade-preco';
-- Imagem: Pessoa com smartphone, sobrecarga digital
-- Fotógrafo: Christian Erfurt

-- Artigo 15: Por que fazer pausas é essencial para a produtividade
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80'
WHERE slug = 'pausas-essenciais-produtividade';
-- Imagem: Café e momento de pausa, descanso necessário
-- Fotógrafo: Jakub Dziubak

-- Artigo 16: Inteligência emocional: a chave para o sucesso profissional
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80'
WHERE slug = 'inteligencia-emocional-sucesso-profissional';
-- Imagem: Equipe colaborando, liderança, trabalho em equipe
-- Fotógrafo: Priscilla Du Preez

-- Artigo 17: Mudança de hábitos: por onde começar?
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80'
WHERE slug = 'mudanca-habitos-por-onde-comecar';
-- Imagem: Estrada aberta, transformação pessoal, novo caminho
-- Fotógrafo: Jens Lelie

-- =====================================================
-- VERIFICAÇÃO FINAL
-- =====================================================

-- Verificar todos os artigos com suas imagens
SELECT
  slug,
  title,
  CASE
    WHEN cover_image IS NOT NULL THEN '✓ Tem imagem'
    ELSE '✗ SEM IMAGEM'
  END as status,
  cover_image
FROM blog_posts
ORDER BY published_at DESC;

-- Contar artigos com e sem imagem
SELECT
  COUNT(*) as total_artigos,
  COUNT(cover_image) as com_imagem,
  COUNT(*) - COUNT(cover_image) as sem_imagem
FROM blog_posts;
