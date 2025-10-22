# Guia do Dashboard de Administração do Blog

Este guia explica como usar o dashboard administrativo para gerenciar os posts do blog do site FOCCO.

## 📋 Índice

- [Acesso ao Dashboard](#acesso-ao-dashboard)
- [Visão Geral](#visão-geral)
- [Criando Posts](#criando-posts)
- [Editando Posts](#editando-posts)
- [Gerenciando Posts](#gerenciando-posts)
- [Upload de Imagens](#upload-de-imagens)
- [Dicas e Boas Práticas](#dicas-e-boas-práticas)

## 🔐 Acesso ao Dashboard

### 1. Criar Conta no Supabase

Primeiro, você precisa ter uma conta de usuário no Supabase:

1. Acesse o painel do Supabase: https://app.supabase.com
2. Vá em **Authentication** → **Users**
3. Clique em **Add User** → **Create new user**
4. Preencha:
   - **Email**: seu email (ex: valeria@focconavida.com.br)
   - **Password**: escolha uma senha forte
   - **Auto Confirm User**: ✅ Marque esta opção
5. Clique em **Create User**

### 2. Fazer Login

1. Acesse: `https://focconavida.com.br/login` (ou `http://localhost:5173/login` em dev)
2. Digite seu email e senha
3. Clique em **Entrar**

Você será redirecionado para o dashboard!

## 🎯 Visão Geral

O dashboard possui três páginas principais:

### Dashboard (Página Inicial)
- **URL**: `/dashboard`
- **Funcionalidades**:
  - Estatísticas gerais (total de posts, publicados, rascunhos, visualizações)
  - Lista dos 5 posts mais recentes
  - Acesso rápido para criar novo post

### Gerenciar Posts
- **URL**: `/dashboard/posts`
- **Funcionalidades**:
  - Lista completa de todos os posts
  - Busca por título
  - Publicar/despublicar posts
  - Editar posts existentes
  - Deletar posts

### Criar/Editar Post
- **URL**: `/dashboard/posts/new` (novo) ou `/dashboard/posts/:id/edit` (editar)
- **Funcionalidades**:
  - Formulário completo de criação/edição
  - Upload de imagens
  - Preview de leitura
  - Salvar como rascunho ou publicar

## ✍️ Criando Posts

### Passo a Passo

1. **Acesse o dashboard** e clique em "Novo Post"

2. **Preencha o Título**
   - Exemplo: "Como Alcançar o Equilíbrio Emocional"
   - O slug será gerado automaticamente

3. **Revise o Slug (URL)**
   - Gerado automaticamente a partir do título
   - Exemplo: `como-alcancar-equilibrio-emocional`
   - Pode editar manualmente se quiser
   - ⚠️ O slug não pode ser alterado depois de publicado

4. **Escreva o Resumo**
   - 1-2 frases que descrevem o post
   - Aparece na listagem de posts
   - Máximo recomendado: 150-200 caracteres

5. **Escreva o Conteúdo**
   - Use o editor de texto grande
   - Pode usar formatação Markdown básica:
     ```markdown
     # Título Principal
     ## Subtítulo

     **Negrito**
     *Itálico*

     - Item de lista
     - Outro item

     [Link](https://exemplo.com)
     ```
   - O tempo de leitura é calculado automaticamente

6. **Adicione uma Imagem de Capa** (opcional)
   - Clique em "Upload de Imagem" para enviar do computador
   - Ou cole uma URL de imagem externa
   - Formatos aceitos: JPG, PNG, GIF, WEBP
   - Tamanho máximo: 5MB
   - Dimensões recomendadas: 1200x630px

7. **Selecione uma Categoria** (opcional)
   - Categorias disponíveis:
     - Desenvolvimento Pessoal
     - Autoconhecimento
     - Carreira
     - Bem-estar
     - Mindfulness
     - Produtividade

8. **Adicione Tags** (opcional)
   - Separe por vírgula
   - Exemplo: `coaching, transformação, autoconhecimento`
   - Ajudam na organização e busca

9. **Escolha se quer Publicar**
   - ✅ **Publicado**: O post fica visível no site imediatamente
   - ❌ **Rascunho**: Salva o post mas não publica

10. **Clique em "Criar Post"**

## ✏️ Editando Posts

### Como Editar

1. Vá em **Dashboard** → **Posts**
2. Encontre o post que deseja editar
3. Clique no ícone de lápis (✏️)
4. Faça as alterações necessárias
5. Clique em "Atualizar Post"

### Visualizar Post Publicado

Se o post estiver publicado, você pode clicar no botão "👁️ Visualizar" para ver como está aparecendo no site.

## 📝 Gerenciando Posts

### Buscar Posts
- Use a barra de busca no topo
- Busca pelo título do post

### Publicar/Despublicar
- Clique no ícone de olho (👁️) para publicar
- Clique no ícone de olho cortado (👁️‍🗨️) para despublicar
- Posts despublicados viram rascunhos

### Deletar Posts
1. Clique no ícone de lixeira (🗑️)
2. Confirme a exclusão
3. ⚠️ **ATENÇÃO**: Esta ação não pode ser desfeita!

## 📸 Upload de Imagens

### Através do Formulário

1. No formulário de criar/editar post
2. Seção "Imagem de Capa"
3. Clique em "Upload de Imagem"
4. Selecione a imagem do seu computador
5. Aguarde o upload (aparecerá uma barra de progresso)
6. A imagem será automaticamente inserida

### Usando URLs Externas

Você também pode usar imagens de serviços como:
- **Unsplash**: https://unsplash.com (imagens gratuitas)
- **Pexels**: https://pexels.com (imagens gratuitas)
- Seu próprio servidor

Basta copiar a URL da imagem e colar no campo "Ou cole uma URL"

### Dicas para Imagens

✅ **Boas Práticas**:
- Use imagens de alta qualidade
- Prefira formato WEBP ou JPG (menor tamanho)
- Dimensões ideais: 1200x630px
- Certifique-se que tem direito de usar a imagem

❌ **Evite**:
- Imagens muito grandes (> 5MB)
- Imagens de baixa resolução
- Imagens com marca d'água
- Imagens protegidas por copyright

## 💡 Dicas e Boas Práticas

### Escrevendo Bons Posts

1. **Título Atraente**
   - Use números: "5 Dicas para..."
   - Seja específico: "Como Superar a Ansiedade no Trabalho"
   - Prometa valor: "Guia Completo de..."

2. **Resumo Convincente**
   - Desperte curiosidade
   - Mostre o benefício
   - Seja conciso

3. **Conteúdo de Qualidade**
   - Use subtítulos (##) para organizar
   - Parágrafos curtos (2-4 linhas)
   - Listas e bullet points
   - Exemplos práticos
   - Call-to-action no final

4. **SEO (Otimização para Busca)**
   - Use palavras-chave no título e slug
   - Inclua palavras-chave no conteúdo naturalmente
   - Use tags relevantes
   - Escreva meta descriptions (resumo) atraentes

### Frequência de Publicação

**Recomendado**:
- Mínimo: 1 post por semana
- Ideal: 2-3 posts por semana
- Mantenha consistência

### Categorias e Organização

- Use categorias para agrupar temas similares
- Limite: 1 categoria por post
- Use tags para tópicos específicos
- Máximo: 5 tags por post

### Rascunhos

Use rascunhos para:
- Preparar posts com antecedência
- Revisar antes de publicar
- Salvar ideias em andamento
- Programar conteúdo futuro

## 🔧 Recursos Avançados

### Tempo de Leitura
- Calculado automaticamente
- Baseado em ~200 palavras/minuto
- Aparece no post publicado

### Visualizações
- Contadas automaticamente
- Incrementadas quando alguém acessa o post
- Visíveis no dashboard

### Estatísticas
- Total de posts
- Posts publicados
- Rascunhos
- Total de visualizações

## 🚨 Resolução de Problemas

### Não consigo fazer login
- Verifique se o email e senha estão corretos
- Confirme que o usuário foi criado no Supabase
- Verifique se marcou "Auto Confirm User"

### Erro ao fazer upload de imagem
- Verifique o tamanho (máximo 5MB)
- Confirme que é um arquivo de imagem
- Verifique sua conexão com a internet

### Post não aparece no site
- Confirme que está marcado como "Publicado"
- Verifique se tem título, slug e conteúdo
- Aguarde alguns segundos e atualize a página

### Slug já existe
- Cada slug deve ser único
- Tente outro slug ou edite levemente o título

## 📞 Suporte

Se tiver dúvidas ou problemas:
1. Verifique este guia primeiro
2. Consulte o arquivo SUPABASE-SETUP.md
3. Entre em contato com o desenvolvedor

---

**Última atualização**: ${new Date().toLocaleDateString('pt-BR')}
