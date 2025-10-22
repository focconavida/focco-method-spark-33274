# Configuração do Supabase para o Blog

Este guia detalha como configurar o Supabase para o sistema de blog do site FOCCO.

## 📋 Pré-requisitos

- Conta no Supabase (criar em https://supabase.com)
- Node.js instalado
- Projeto clonado e dependências instaladas

## 🚀 Passo a Passo

### 1. Criar Projeto no Supabase

1. Acesse https://app.supabase.com
2. Clique em "New Project"
3. Preencha os dados:
   - **Nome do Projeto**: focco-blog (ou nome de sua preferência)
   - **Database Password**: Escolha uma senha forte
   - **Região**: South America (São Paulo) - para melhor performance
4. Aguarde a criação do projeto (pode levar alguns minutos)

### 2. Obter Credenciais

1. No painel do projeto, vá em **Settings** → **API**
2. Copie as seguintes informações:
   - **Project URL** (algo como: `https://xxxxx.supabase.co`)
   - **anon/public key** (chave pública)

### 3. Configurar Variáveis de Ambiente

1. Copie o arquivo de exemplo:
   ```bash
   cp .env.example .env.local
   ```

2. Edite o arquivo `.env.local` e adicione suas credenciais:
   ```env
   VITE_SUPABASE_URL=https://seu-projeto.supabase.co
   VITE_SUPABASE_ANON_KEY=sua-chave-anon-aqui
   ```

### 4. Criar Tabela no Banco de Dados

1. No painel do Supabase, vá em **SQL Editor**
2. Clique em **New Query**
3. Copie e cole todo o conteúdo do arquivo `supabase-schema.sql`
4. Clique em **Run** para executar o script

O script irá:
- Criar a tabela `blog_posts` com todos os campos necessários
- Criar índices para melhor performance
- Configurar Row Level Security (RLS) para segurança
- Inserir 3 posts de exemplo

### 5. Verificar a Instalação

1. Vá em **Table Editor** no painel do Supabase
2. Selecione a tabela `blog_posts`
3. Você deve ver os 3 posts de exemplo criados

### 6. Testar Localmente

Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

Acesse `http://localhost:5173/blog` e você verá os posts de exemplo.

## 📝 Gerenciando Posts

### Via Interface do Supabase

1. Acesse **Table Editor** → `blog_posts`
2. Clique em **Insert** → **Insert row**
3. Preencha os campos:
   - **title**: Título do post
   - **slug**: URL amigável (ex: `meu-post-legal`)
   - **excerpt**: Resumo curto
   - **content**: Conteúdo completo (aceita Markdown/HTML)
   - **cover_image**: URL da imagem de capa
   - **author**: Nome do autor (padrão: Valéria Dias)
   - **category**: Categoria do post
   - **tags**: Array de tags (ex: `["coaching", "vida"]`)
   - **is_published**: `true` para publicar
   - **published_at**: Data e hora de publicação
   - **reading_time**: Tempo de leitura em minutos

### Campos Importantes

- **slug**: Deve ser único, usado na URL do post
- **is_published**: Somente posts com `true` aparecerão no site
- **published_at**: Data usada para ordenação dos posts
- **content**: Pode conter HTML e quebras de linha

## 🔒 Segurança (Row Level Security)

O banco já está configurado com RLS ativo:

- **Leitura pública**: Qualquer pessoa pode ler posts publicados
- **Escrita**: Apenas usuários autenticados podem criar/editar posts

### Para permitir edição (opcional)

Se você quiser criar um admin panel, será necessário:

1. Configurar autenticação no Supabase
2. Criar usuário admin
3. Fazer login antes de criar/editar posts

## 🎨 Personalização

### Modificar Schema

Se precisar adicionar campos à tabela:

```sql
ALTER TABLE blog_posts ADD COLUMN novo_campo TEXT;
```

### Adicionar Categorias Fixas

Você pode criar uma tabela de categorias separada:

```sql
CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE
);

-- Adicionar foreign key na tabela de posts
ALTER TABLE blog_posts
ADD CONSTRAINT fk_category
FOREIGN KEY (category)
REFERENCES categories(slug);
```

## 🚨 Troubleshooting

### Posts não aparecem no site

1. Verifique se `.env.local` está configurado corretamente
2. Confirme que `is_published = true`
3. Verifique se `published_at` tem uma data válida
4. Abra o Console do navegador para ver erros

### Erro de conexão com Supabase

1. Verifique se a URL está correta (sem `/` no final)
2. Confirme que a chave anon está correta
3. Verifique se o projeto está ativo no Supabase

### RLS bloqueando leitura

Se os posts não carregam, pode ser problema no RLS:

```sql
-- Desabilitar temporariamente para testar
ALTER TABLE blog_posts DISABLE ROW LEVEL SECURITY;

-- Depois reabilitar
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
```

## 📚 Recursos Úteis

- [Documentação Supabase](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)

## 🎯 Próximos Passos

Após configurar o blog, você pode:

1. Criar mais posts via Table Editor
2. Personalizar o design das páginas
3. Adicionar sistema de comentários
4. Implementar newsletter
5. Adicionar busca avançada
6. Criar painel administrativo

## 📞 Suporte

Se tiver problemas, verifique:
- Logs do navegador (F12 → Console)
- Status do Supabase: https://status.supabase.com
- Documentação oficial do Supabase
