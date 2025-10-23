# Guia para Adicionar Imagens Reais nos Artigos do Blog

## Bancos de Imagens Gratuitos Recomendados

1. **Unsplash** - https://unsplash.com/
2. **Pexels** - https://www.pexels.com/pt-br/
3. **Pixabay** - https://pixabay.com/pt/

## Sugestões de Imagens por Artigo

### 1. Por que procrastino tanto?
**Slug:** `por-que-procrastino-tanto`
**Tema:** Procrastinação, adiamento de tarefas
**Buscar por:**
- "person stressed work"
- "procrastination desk"
- "tired person laptop"
- "overwhelmed work"

### 2. A Importância de Aprender a Dizer Não
**Slug:** `importancia-de-aprender-dizer-nao`
**Tema:** Estabelecer limites, assertividade
**Buscar por:**
- "business woman confident"
- "person saying no"
- "confident professional"
- "boundaries work"

### 3. A Importância da Respiração Consciente
**Slug:** `importancia-respiracao-consciente`
**Tema:** Meditação, respiração, mindfulness
**Buscar por:**
- "meditation breathing"
- "woman meditating office"
- "mindfulness work"
- "deep breathing"

### 4. Transição de Carreira com Qualidade de Vida
**Slug:** `transicao-de-carreira-com-qualidade`
**Tema:** Mudança de carreira, novos caminhos
**Buscar por:**
- "career change"
- "new path road"
- "professional growth"
- "career transition"

### 5. Como Diminuir o Estresse
**Slug:** `como-diminuir-estresse`
**Tema:** Gestão de estresse, relaxamento
**Buscar por:**
- "stress relief"
- "calm person work"
- "relaxation office"
- "stress management"

### 6. Desenvolvendo Equilíbrio Emocional
**Slug:** `desenvolvendo-equilibrio-emocional`
**Tema:** Equilíbrio, bem-estar emocional
**Buscar por:**
- "emotional balance"
- "peace mind"
- "work life balance"
- "emotional wellness"

### 7. Por que Tanta Gente Ansiosa?
**Slug:** `por-que-tanta-gente-ansiosa`
**Tema:** Ansiedade moderna, sociedade
**Buscar por:**
- "anxiety modern life"
- "worried person phone"
- "stress technology"
- "anxious professional"

### 8. A Importância da Pausa na Vida Diária
**Slug:** `importancia-da-pausa-na-vida-diaria`
**Tema:** Pausas, descanso, breaks
**Buscar por:**
- "coffee break work"
- "rest pause"
- "taking break office"
- "relaxation moment"

### 9. Regular Emoções = Profissional Notado
**Slug:** `regular-emocoes-profissional-notado`
**Tema:** Inteligência emocional no trabalho
**Buscar por:**
- "professional success"
- "emotional intelligence work"
- "confident leader"
- "team leadership"

### 10. Investir para Mudar Estilo de Vida Transforma Futuro
**Slug:** `investir-mudar-estilo-vida-transforma-futuro`
**Tema:** Transformação, novo estilo de vida
**Buscar por:**
- "lifestyle change"
- "transformation journey"
- "healthy lifestyle"
- "new beginning life"

## Passo a Passo para Adicionar as Imagens

### Opção 1: Download Manual

1. Acesse um dos bancos de imagens
2. Busque pelo termo sugerido
3. Escolha uma imagem de alta qualidade (mínimo 1200x630px)
4. Baixe a imagem
5. Otimize no TinyPNG ou similar (https://tinypng.com/)
6. Salve na pasta `public/assets/blog/` com o nome do slug
   - Exemplo: `procrastinacao.jpg`, `dizer-nao.jpg`
7. Atualize o SQL para apontar para a nova imagem

### Opção 2: URLs Diretas (Unsplash)

Você pode usar URLs diretas do Unsplash com otimização automática:

```sql
UPDATE blog_posts
SET cover_image = 'https://images.unsplash.com/photo-ID?w=1200&h=630&fit=crop',
    updated_at = NOW()
WHERE slug = 'por-que-procrastino-tanto';
```

**Vantagens:**
- Não precisa fazer download
- CDN rápido do Unsplash
- Otimização automática
- Sempre disponível

**Desvantagens:**
- Depende de serviço externo
- Pode mudar ou sair do ar

### Opção 3: Usar API do Unsplash

Posso criar um script que busca automaticamente as melhores imagens para cada tema usando a API do Unsplash.

## Especificações Técnicas

- **Tamanho ideal:** 1200x630px (padrão Open Graph)
- **Formato:** JPG (fotos) ou PNG (se precisar transparência)
- **Peso máximo:** 200KB após otimização
- **Proporção:** 1.91:1 (landscape)

## Atualizar o SQL Depois

Depois de escolher as imagens, você vai atualizar o SQL assim:

```sql
UPDATE blog_posts
SET cover_image = '/assets/blog/procrastinacao.jpg',  -- ou .png
    updated_at = NOW()
WHERE slug = 'por-que-procrastino-tanto';
```

---

## O que você prefere?

1. **Buscar manualmente** - Você escolhe as imagens que mais combinem
2. **Eu busco URLs do Unsplash** - Rápido, eu encontro e monto o SQL
3. **Script automático** - Usa API para baixar as melhores imagens automaticamente
