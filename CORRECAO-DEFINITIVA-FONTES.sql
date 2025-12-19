-- =====================================================
-- CORREÇÃO DEFINITIVA - ESTILOS INLINE (GARANTIDO!)
-- Este SQL adiciona estilos inline que funcionam 100%
-- independente de cache ou CSS
-- =====================================================

-- PASSO 1: Remover classes antigas dos H2 (se houver)
UPDATE blog_posts
SET content = REPLACE(content,
  '<h2 class="!text-lg !font-bold !text-gray-900 !mt-10 !mb-5 !leading-snug">',
  '<h2>'
)
WHERE content LIKE '%<h2 class%';

-- PASSO 2: Adicionar estilos INLINE nos H2 (18px)
UPDATE blog_posts
SET content = REPLACE(content,
  '<h2>',
  '<h2 style="font-size: 18px !important; font-weight: 700 !important; color: #111827 !important; margin-top: 2.5rem !important; margin-bottom: 1.25rem !important; line-height: 1.625 !important;">'
)
WHERE content LIKE '%<h2>%';

-- PASSO 3: Remover classes antigas dos H3 (se houver)
UPDATE blog_posts
SET content = REPLACE(content,
  '<h3 class="!text-base !font-bold !text-gray-900 !mt-8 !mb-4 !leading-normal">',
  '<h3>'
)
WHERE content LIKE '%<h3 class%';

-- PASSO 4: Adicionar estilos INLINE nos H3 (16px bold)
UPDATE blog_posts
SET content = REPLACE(content,
  '<h3>',
  '<h3 style="font-size: 16px !important; font-weight: 700 !important; color: #111827 !important; margin-top: 2rem !important; margin-bottom: 1rem !important; line-height: 1.5 !important;">'
)
WHERE content LIKE '%<h3>%';

-- VERIFICAÇÃO: Ver quantos posts foram atualizados
SELECT
  COUNT(*) as total_posts,
  COUNT(*) FILTER (WHERE content LIKE '%<h2 style%') as h2_com_estilo_inline,
  COUNT(*) FILTER (WHERE content LIKE '%<h3 style%') as h3_com_estilo_inline
FROM blog_posts
WHERE is_published = true;

-- Ver exemplo de H2 atualizado
SELECT
  title,
  SUBSTRING(content FROM POSITION('<h2 style' IN content) FOR 250) as exemplo_h2
FROM blog_posts
WHERE content LIKE '%<h2 style%'
LIMIT 1;
