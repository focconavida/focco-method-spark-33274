# 📸 GUIA COMPLETO DE IMAGENS PARA ARTIGOS
## BLOG MÉTODO FOCCO

**Importante:** TODOS os artigos devem ter imagens otimizadas!

---

## 🎯 ESTRATÉGIA DE IMAGENS

### Tipos de Imagens Necessárias:

1. **Imagem de Capa Principal** (Obrigatória)
   - Tamanho: 1200x630px (proporção 16:9)
   - Formato: JPG otimizado
   - Peso máximo: 150KB
   - Uso: Compartilhamento social + Topo do artigo

2. **Imagens Internas** (Opcional mas recomendado)
   - Tamanho: 800x600px
   - Formato: JPG otimizado
   - Peso máximo: 100KB cada
   - Quantidade: 1-3 por artigo

---

## 🔍 OPÇÕES DE FONTES GRATUITAS

### OPÇÃO 1: Bancos de Imagens Gratuitos (RECOMENDADO)

**Unsplash** (https://unsplash.com)
- ✅ Alta qualidade
- ✅ 100% gratuito
- ✅ Uso comercial permitido
- ✅ Não precisa atribuição
- 🎯 Palavras-chave em inglês

**Pexels** (https://pexels.com)
- ✅ Alta qualidade
- ✅ 100% gratuito
- ✅ Uso comercial permitido
- ✅ Fácil de usar

**Pixabay** (https://pixabay.com)
- ✅ Gratuito
- ✅ Variedade grande
- ✅ Interface em português

---

### OPÇÃO 2: Geração com IA

**Leonardo.ai** (https://leonardo.ai)
- Free tier: 150 imagens/dia
- Qualidade excelente
- Customização total

**Midjourney**
- Pago: $10/mês
- Melhor qualidade
- Mais realista

---

### OPÇÃO 3: Canva (Design Próprio)

**Canva Free** (https://canva.com)
- ✅ Templates prontos
- ✅ Fácil personalização
- ✅ Adicionar logo FOCCO
- ✅ Texto sobre imagem

---

## 📋 PALAVRAS-CHAVE PARA BUSCA DE IMAGENS

### Para cada tema, buscar:

#### Ansiedade & Saúde Mental:
- `woman meditation calm`
- `peaceful mind`
- `mental health wellness`
- `stress relief`
- `calm woman nature`

#### Carreira & Profissional:
- `professional woman confident`
- `business success`
- `career growth`
- `workplace wellness`
- `professional development`

#### Desenvolvimento Pessoal:
- `personal growth`
- `self improvement`
- `mindful living`
- `woman reading book`
- `journal writing`

#### Bem-estar & Saúde:
- `healthy lifestyle`
- `wellness routine`
- `yoga meditation`
- `balanced life`
- `morning routine`

#### Mindfulness & Foco:
- `mindfulness practice`
- `focused woman`
- `meditation peace`
- `present moment`
- `conscious living`

---

## 🎨 DIRETRIZES VISUAIS

### Estilo Visual do Blog FOCCO:

**Cores Predominantes:**
- 🟣 Roxo (#8B5CF6) - Cor principal do Método FOCCO
- 🔵 Azul suave
- 🌿 Verde natural
- ⚪ Tons neutros (branco, cinza claro)

**Características:**
- ✅ Imagens luminosas (evitar escuras)
- ✅ Pessoas em ambientes naturais
- ✅ Expressões de paz, confiança, foco
- ✅ Minimalistas (evitar poluição visual)
- ✅ Profissionais mas acessíveis

**EVITAR:**
- ❌ Imagens muito corporativas/frias
- ❌ Stock photos clichês
- ❌ Imagens escuras/pesadas
- ❌ Muitos elementos competindo
- ❌ Fotos desfocadas ou baixa qualidade

---

## 📐 ESPECIFICAÇÕES TÉCNICAS

### Imagem de Capa:
```
Dimensões: 1200 x 630 pixels
Proporção: 16:9
Formato: JPG
Qualidade: 80-85%
Peso máximo: 150KB
Nome do arquivo: slug-do-artigo-cover.jpg

Exemplo:
- ansiedade-nao-precisa-parar-cover.jpg
- perfeccionismo-adoece-cover.jpg
```

### Imagens Internas:
```
Dimensões: 800 x 600 pixels
Proporção: 4:3
Formato: JPG
Qualidade: 75-80%
Peso máximo: 100KB
Nome do arquivo: slug-do-artigo-01.jpg

Exemplo:
- ansiedade-nao-precisa-parar-01.jpg
- ansiedade-nao-precisa-parar-02.jpg
```

---

## 🛠️ PROCESSO DE OTIMIZAÇÃO

### Passo 1: Download/Criação
- Baixar em resolução original
- Ou gerar com IA
- Ou criar no Canva

### Passo 2: Redimensionamento
**Ferramentas Online Gratuitas:**
- https://www.iloveimg.com/resize-image
- https://imageresizer.com
- https://squoosh.app (Google)

### Passo 3: Compressão
**Ferramentas Online Gratuitas:**
- https://tinypng.com (RECOMENDADO)
- https://compressor.io
- https://squoosh.app

### Passo 4: Upload
- Upload para `/public/assets/blog/`
- Ou usar Supabase Storage
- Verificar URL funciona

---

## 📂 ESTRUTURA DE PASTAS

```
/public/assets/blog/
├── covers/
│   ├── ansiedade-nao-precisa-parar.jpg
│   ├── perfeccionismo-adoece.jpg
│   └── ...
├── content/
│   ├── ansiedade-nao-precisa-parar-01.jpg
│   ├── ansiedade-nao-precisa-parar-02.jpg
│   └── ...
```

---

## 💾 CAMPO NO BANCO DE DADOS

### Adicionar no Supabase:

```sql
-- Adicionar campo cover_image à tabela blog_posts
ALTER TABLE blog_posts
ADD COLUMN cover_image TEXT;

-- Adicionar campo para alt text
ALTER TABLE blog_posts
ADD COLUMN cover_image_alt TEXT;

-- Exemplo de update:
UPDATE blog_posts
SET
  cover_image = '/assets/blog/covers/ansiedade-nao-precisa-parar.jpg',
  cover_image_alt = 'Mulher meditando em ambiente tranquilo ao ar livre'
WHERE slug = 'ansiedade-nao-precisa-parar';
```

---

## ✍️ ALT TEXT (SEO)

### Boas Práticas para Alt Text:

**✅ BOM:**
- "Mulher meditando em posição de lótus ao ar livre"
- "Profissional confiante em ambiente de trabalho moderno"
- "Pessoa praticando mindfulness em ambiente natural"

**❌ RUIM:**
- "Imagem 1"
- "foto-stock-123456"
- "mulher" (muito genérico)

### Template de Alt Text:
```
[Pessoa] + [Ação] + [Contexto relacionado ao artigo]

Exemplos:
- "Pessoa superando ansiedade através da meditação"
- "Profissional equilibrando vida pessoal e carreira"
- "Mulher praticando autocuidado e bem-estar"
```

---

## 🚀 WORKFLOW RÁPIDO (Por Artigo)

### Tempo estimado: 15-20 minutos

1. **Ler o artigo** (2 min)
   - Entender tema principal
   - Identificar emoção/mensagem

2. **Buscar imagem** (5 min)
   - Unsplash.com
   - Palavras-chave em inglês
   - Baixar em alta resolução

3. **Redimensionar** (3 min)
   - iloveimg.com
   - 1200x630px para capa
   - 800x600px para internas (se houver)

4. **Comprimir** (3 min)
   - tinypng.com
   - Garantir <150KB (capa)
   - Garantir <100KB (internas)

5. **Nomear e salvar** (2 min)
   - Nome descritivo
   - Salvar em /public/assets/blog/covers/

6. **Upload e inserir no artigo** (3 min)
   - Adicionar URL no banco
   - Adicionar alt text
   - Testar visualização

7. **Verificar compartilhamento social** (2 min)
   - Testar preview no Facebook
   - Testar preview no LinkedIn
   - Ajustar se necessário

---

## 📊 CHECKLIST DE IMAGENS POR ARTIGO

### Para Cada Artigo, Verificar:

- [ ] Imagem de capa selecionada/criada
- [ ] Dimensões corretas (1200x630px)
- [ ] Comprimida (<150KB)
- [ ] Nomeada corretamente (slug-cover.jpg)
- [ ] Upload realizado
- [ ] URL adicionada no banco de dados
- [ ] Alt text descritivo adicionado
- [ ] Testada no artigo publicado
- [ ] Preview social verificado (Facebook/LinkedIn)
- [ ] Mobile testado (carrega rápido)

---

## 🎯 EXEMPLOS PRÁTICOS

### Artigo: "A ansiedade não precisa parar você"

**Imagem de Capa:**
- Busca: `woman calm meditation nature peace`
- Emoção: Tranquilidade, superação, paz
- Cores: Verde natural, luz suave, roxo/azul
- Alt text: "Mulher em estado de calma praticando mindfulness ao ar livre"
- Arquivo: `ansiedade-nao-precisa-parar-cover.jpg`

---

### Artigo: "Perfeccionismo adoece"

**Imagem de Capa:**
- Busca: `stressed professional woman balance wellness`
- Emoção: Transformação do estresse para equilíbrio
- Cores: Contraste entre tensão e relaxamento
- Alt text: "Profissional encontrando equilíbrio entre perfeccionismo e bem-estar"
- Arquivo: `perfeccionismo-adoece-cover.jpg`

---

### Artigo: "Como desenvolver habilidades sem adoecer"

**Imagem de Capa:**
- Busca: `professional growth success healthy balance`
- Emoção: Crescimento saudável, confiança
- Cores: Tons profissionais mas calorosos
- Alt text: "Profissional em crescimento mantendo saúde e equilíbrio"
- Arquivo: `desenvolver-habilidades-sem-adoecer-cover.jpg`

---

## 🎨 TEMPLATE CANVA (Opcional)

### Se quiser criar capas personalizadas no Canva:

**Elementos:**
1. Fundo: Imagem do Unsplash (baixa opacidade 60-70%)
2. Overlay: Retângulo roxo (#8B5CF6) com 30% opacidade
3. Título do artigo: Fonte bold, branca, alinhada à esquerda
4. Logo FOCCO: Canto superior direito (pequeno)
5. Tag de categoria: Canto inferior esquerdo

**Tamanho do Canvas:**
- Personalizado: 1200 x 630 pixels

---

## 💡 DICAS DE PRODUTIVIDADE

### Fazer em Lote:

**Estratégia Recomendada:**
- Separar 1 dia para buscar imagens de 10 artigos
- Usar mesma ferramenta (Unsplash) para todos
- Download em lote
- Redimensionar todos de uma vez
- Comprimir todos de uma vez
- Upload em lote para servidor

**Ferramentas de Automação:**
- Bulk Image Downloader (extensão Chrome)
- Batch resize com iloveimg.com
- Batch compression com tinypng.com

---

## 🔄 ATUALIZAÇÃO DOS 10 ARTIGOS EXISTENTES

### Artigos que já temos (precisam de imagens):

1. Por que procrastino tanto?
   - Imagem: `woman focused productivity workspace`

2. A importância de aprender a dizer não
   - Imagem: `confident woman setting boundaries`

3. A importância da respiração consciente
   - Imagem: `woman breathing exercise mindfulness`

4. Transição de carreira com qualidade
   - Imagem: `professional career transition success`

5. Como diminuir seu estresse
   - Imagem: `stress relief relaxation peace`

6. Desenvolvendo equilíbrio emocional
   - Imagem: `emotional balance mindfulness peace`

7. Por que tanta gente está ansiosa
   - Imagem: `modern anxiety society wellness`

8. A importância da pausa na vida diária
   - Imagem: `woman taking break peaceful moment`

9. Regular emoções profissional notado
   - Imagem: `professional emotional intelligence success`

10. Investir em mudar estilo de vida
    - Imagem: `lifestyle transformation healthy living`

---

## 📋 SQL PARA ADICIONAR IMAGENS

```sql
-- Adicionar campos de imagem (executar uma vez)
ALTER TABLE blog_posts
ADD COLUMN IF NOT EXISTS cover_image TEXT,
ADD COLUMN IF NOT EXISTS cover_image_alt TEXT;

-- Template para atualizar cada artigo
UPDATE blog_posts
SET
  cover_image = '/assets/blog/covers/[SLUG-DO-ARTIGO].jpg',
  cover_image_alt = '[DESCRIÇÃO DA IMAGEM]'
WHERE slug = '[SLUG-DO-ARTIGO]';
```

---

## ✅ PRÓXIMA AÇÃO IMEDIATA

### Para os 10 Artigos Existentes:

1. **Buscar 10 imagens** (30 min)
   - Unsplash.com
   - Download de todas

2. **Processar em lote** (20 min)
   - Redimensionar: 1200x630px
   - Comprimir: <150KB
   - Nomear corretamente

3. **Upload** (10 min)
   - Para /public/assets/blog/covers/
   - Ou Supabase Storage

4. **Atualizar banco** (10 min)
   - SQL para adicionar URLs
   - Adicionar alt texts

5. **Testar** (10 min)
   - Verificar em cada artigo
   - Preview social

**TEMPO TOTAL: ~80 minutos para 10 artigos**

---

## 🎯 PARA OS 25 ARTIGOS DA SPRINT

### Incluir imagens no processo de criação:

**Novo Workflow:**
1. Criar conteúdo do artigo (1-2h)
2. **Buscar e processar imagem** (15-20 min)
3. Revisar artigo (30-60 min)
4. Publicar com imagem (10 min)

**Ou fazer em lote:**
- Criar 5 artigos de uma vez
- Processar 5 imagens de uma vez
- Publicar todos juntos

---

## 🎨 BANCO DE IMAGENS SUGERIDO

### Criar pasta com imagens pré-selecionadas:

**Categorias:**
- Ansiedade: 10 imagens
- Carreira: 10 imagens
- Desenvolvimento: 10 imagens
- Bem-estar: 10 imagens
- Mindfulness: 10 imagens

**Total: 50 imagens** prontas para uso
**Tempo para criar banco:** 2-3 horas
**Benefício:** Agiliza produção futura

---

## 📞 SUPORTE

**Ferramentas Recomendadas:**
- ✅ Unsplash.com (imagens)
- ✅ TinyPNG.com (compressão)
- ✅ ILoveIMG.com (redimensionar)
- ✅ Canva.com (criar capas personalizadas)

**Dúvidas Técnicas:**
- Como fazer upload: Usar FTP ou Supabase Storage
- Tamanhos ideais: Sempre 1200x630px para capa
- SEO: Alt text descritivo sempre

---

**Arquivo criado:** `GUIA-IMAGENS-ARTIGOS.md`
**Localização:** `/root/projetos/landpage-focco/focco-method-spark-33274/`
**Status:** ✅ Pronto para uso
**Próximo passo:** Buscar e processar imagens para os 10 artigos existentes
