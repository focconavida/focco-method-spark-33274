-- =====================================================
-- APLICAR IMAGENS REAIS DO UNSPLASH NOS ARTIGOS
-- Script de atualização para os 10 artigos do blog
-- =====================================================

-- Artigo 1: Por que procrastino tanto?
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&q=80'
WHERE slug = 'por-que-procrastino-tanto';
-- Imagem: Pessoa estressada no trabalho, mãos na cabeça com laptop

-- Artigo 2: A importância de aprender a dizer não
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1200&q=80'
WHERE slug = 'importancia-de-aprender-dizer-nao';
-- Imagem: Mulher profissional confiante em ambiente corporativo

-- Artigo 3: A importância da respiração consciente
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80'
WHERE slug = 'importancia-respiracao-consciente';
-- Imagem: Pessoa meditando ao ar livre, foco em mindfulness

-- Artigo 4: Como saber se é hora de mudar de carreira
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80'
WHERE slug = 'como-saber-hora-mudar-carreira';
-- Imagem: Caminho bifurcado, escolhas, novo rumo profissional

-- Artigo 5: Técnicas simples para reduzir o estresse no dia a dia
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1200&q=80'
WHERE slug = 'tecnicas-simples-reduzir-estresse';
-- Imagem: Pessoa relaxando, momentos de calma, xícara de chá

-- Artigo 6: O papel das emoções no equilíbrio da vida
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1200&q=80'
WHERE slug = 'papel-emocoes-equilibrio-vida';
-- Imagem: Rosto sereno, equilíbrio emocional, paz interior

-- Artigo 7: Ansiedade: quando a modernidade cobra seu preço
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1200&q=80'
WHERE slug = 'ansiedade-modernidade-preco';
-- Imagem: Pessoa preocupada com smartphone, vida moderna, tecnologia

-- Artigo 8: Por que fazer pausas é essencial para a produtividade
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80'
WHERE slug = 'pausas-essenciais-produtividade';
-- Imagem: Café, pausa para descanso, momento de break

-- Artigo 9: Inteligência emocional: a chave para o sucesso profissional
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80'
WHERE slug = 'inteligencia-emocional-sucesso-profissional';
-- Imagem: Equipe colaborando, liderança, ambiente profissional positivo

-- Artigo 10: Mudança de hábitos: por onde começar?
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80'
WHERE slug = 'mudanca-habitos-por-onde-comecar';
-- Imagem: Novo começo, estrada aberta, transformação pessoal

-- Verificar as atualizações
SELECT slug, cover_image
FROM blog_posts
ORDER BY published_at DESC;
