-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  cover_image TEXT,
  author TEXT NOT NULL DEFAULT 'Valéria Dias',
  author_avatar TEXT,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  is_published BOOLEAN DEFAULT false,
  views INTEGER DEFAULT 0,
  reading_time INTEGER DEFAULT 5,
  category TEXT,
  tags TEXT[]
);

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(is_published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access to published posts
CREATE POLICY "Allow public read access to published posts"
  ON blog_posts
  FOR SELECT
  USING (is_published = true);

-- Create policy to allow authenticated users to manage all posts
CREATE POLICY "Allow authenticated users to manage posts"
  ON blog_posts
  FOR ALL
  USING (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to read all posts (including drafts)
CREATE POLICY "Allow authenticated users to read all posts"
  ON blog_posts
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc'::text, NOW());
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, cover_image, is_published, published_at, category, tags, reading_time) VALUES
(
  'Como o Método FOCCO Pode Transformar Sua Vida',
  'como-metodo-focco-transformar-vida',
  'Descubra como o Método FOCCO pode ajudá-lo a alcançar clareza mental, superar desafios e viver com mais propósito e realização pessoal.',
  '# Como o Método FOCCO Pode Transformar Sua Vida

O Método FOCCO é uma abordagem revolucionária que combina técnicas de coaching, neurociência e desenvolvimento pessoal para ajudar você a alcançar seus objetivos e viver uma vida mais plena.

## O Que É o Método FOCCO?

FOCCO é um acrônimo que representa os cinco pilares fundamentais do método:
- **F**oco: Clareza sobre o que realmente importa
- **O**rganização: Estruturação de metas e ações
- **C**onexão: Relacionamentos significativos
- **C**rescimento: Desenvolvimento contínuo
- **O**timização: Maximização do potencial

## Benefícios do Método

Ao aplicar o Método FOCCO em sua vida, você pode esperar:
- Maior clareza mental e emocional
- Aumento da produtividade
- Melhoria nos relacionamentos
- Redução do estresse e ansiedade
- Alcance de objetivos pessoais e profissionais

## Como Começar

O primeiro passo é participar de uma sessão de diagnóstico gratuita, onde identificaremos suas principais necessidades e criaremos um plano personalizado para você.',
  'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200',
  true,
  NOW(),
  'Desenvolvimento Pessoal',
  ARRAY['coaching', 'transformação', 'autoconhecimento'],
  8
),
(
  '5 Sinais de Que Você Precisa de Coaching Pessoal',
  '5-sinais-precisa-coaching-pessoal',
  'Identifique os principais indicadores de que é hora de buscar apoio profissional para alcançar seus objetivos e superar obstáculos.',
  '# 5 Sinais de Que Você Precisa de Coaching Pessoal

Às vezes, precisamos de ajuda profissional para desbloquear nosso verdadeiro potencial. Aqui estão cinco sinais claros de que o coaching pode ser exatamente o que você precisa.

## 1. Você Se Sente Estagnado

Se você sente que está sempre no mesmo lugar, sem progresso em suas metas, o coaching pode ajudá-lo a identificar barreiras e criar um plano de ação efetivo.

## 2. Falta de Clareza Sobre Seus Objetivos

Quando você não sabe exatamente o que quer ou para onde está indo, um coach pode ajudá-lo a descobrir seus verdadeiros desejos e propósitos.

## 3. Dificuldade em Tomar Decisões Importantes

Se você fica paralisado diante de decisões cruciais, o coaching fornece ferramentas para análise e tomada de decisão consciente.

## 4. Desequilíbrio Entre Vida Pessoal e Profissional

Quando o trabalho consome toda sua energia e tempo, é hora de repensar suas prioridades com ajuda profissional.

## 5. Baixa Autoconfiança

Se você duvida constantemente de suas capacidades, o coaching trabalha o desenvolvimento da autoestima e confiança.

## Próximos Passos

Reconheceu algum desses sinais em você? Entre em contato e agende uma sessão de diagnóstico gratuita.',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200',
  true,
  NOW() - INTERVAL '7 days',
  'Autoconhecimento',
  ARRAY['coaching', 'sinais', 'desenvolvimento'],
  6
),
(
  'A Importância do Autoconhecimento na Jornada Profissional',
  'importancia-autoconhecimento-jornada-profissional',
  'Entenda por que conhecer a si mesmo é fundamental para o sucesso profissional e como desenvolver essa habilidade essencial.',
  '# A Importância do Autoconhecimento na Jornada Profissional

O autoconhecimento é a base de qualquer desenvolvimento profissional significativo. Sem entender quem você é, suas forças e fraquezas, é difícil traçar um caminho de sucesso.

## O Que É Autoconhecimento?

Autoconhecimento é a capacidade de compreender profundamente seus próprios pensamentos, emoções, valores, motivações e comportamentos.

## Por Que É Importante?

### 1. Tomada de Decisões Mais Assertivas
Quando você se conhece bem, consegue fazer escolhas alinhadas com seus valores e objetivos.

### 2. Melhor Gestão Emocional
Conhecer seus gatilhos emocionais permite que você gerencie melhor suas reações no ambiente profissional.

### 3. Relacionamentos Mais Saudáveis
Entender suas próprias necessidades facilita a comunicação e o relacionamento com colegas e superiores.

### 4. Identificação de Talentos
Ao conhecer suas forças, você pode direcioná-las para áreas onde terá mais impacto.

## Como Desenvolver o Autoconhecimento

- Faça terapia ou coaching
- Pratique meditação e mindfulness
- Solicite feedback de pessoas de confiança
- Mantenha um diário de reflexões
- Faça testes de personalidade e vocacionais

## Conclusão

Investir em autoconhecimento é investir em seu futuro profissional. O Método FOCCO pode ser seu aliado nessa jornada.',
  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200',
  true,
  NOW() - INTERVAL '14 days',
  'Carreira',
  ARRAY['autoconhecimento', 'carreira', 'desenvolvimento profissional'],
  7
);

-- ========================================
-- STORAGE CONFIGURATION
-- ========================================

-- Create storage bucket for blog assets
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-assets', 'blog-assets', true)
ON CONFLICT (id) DO NOTHING;

-- Create storage policy to allow public read access
CREATE POLICY "Allow public read access to blog assets"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'blog-assets');

-- Create storage policy to allow authenticated users to upload
CREATE POLICY "Allow authenticated users to upload blog assets"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'blog-assets' AND
    auth.role() = 'authenticated'
  );

-- Create storage policy to allow authenticated users to update
CREATE POLICY "Allow authenticated users to update blog assets"
  ON storage.objects FOR UPDATE
  USING (
    bucket_id = 'blog-assets' AND
    auth.role() = 'authenticated'
  );

-- Create storage policy to allow authenticated users to delete
CREATE POLICY "Allow authenticated users to delete blog assets"
  ON storage.objects FOR DELETE
  USING (
    bucket_id = 'blog-assets' AND
    auth.role() = 'authenticated'
  );
