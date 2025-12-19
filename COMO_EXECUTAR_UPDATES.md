# Como Executar as Atualizações de H2 e H3

## Problema Identificado

O MCP do Supabase tentou executar as atualizações, mas foram **bloqueadas por RLS (Row Level Security)**. A chave `anon` não tem permissão para fazer UPDATEs na tabela `blog_posts`.

## Solução Rápida (RECOMENDADO)

### Método 1: Executar no SQL Editor do Supabase

1. Acesse: https://app.supabase.com/project/vtsqvmmhgekwdwihyaax/editor/sql

2. Cole e execute este SQL:

```sql
-- UPDATE 1: Atualizar tags H2
UPDATE blog_posts
SET content = REPLACE(
  REPLACE(
    REPLACE(content, '<h2>', '<h2 class="text-lg font-bold text-gray-900 mt-10 mb-5 leading-snug">'),
    '<h2 class="', '<h2 class="text-lg font-bold text-gray-900 mt-10 mb-5 leading-snug '
  ),
  '<h2 style="', '<h2 class="text-lg font-bold text-gray-900 mt-10 mb-5 leading-snug" style="'
)
WHERE content LIKE '%<h2>%' OR content LIKE '%<h2 %';
```

3. Execute este SQL para H3:

```sql
-- UPDATE 2: Atualizar tags H3
UPDATE blog_posts
SET content = REPLACE(
  REPLACE(
    REPLACE(content, '<h3>', '<h3 class="text-base font-bold text-gray-900 mt-8 mb-4 leading-normal">'),
    '<h3 class="', '<h3 class="text-base font-bold text-gray-900 mt-8 mb-4 leading-normal '
  ),
  '<h3 style="', '<h3 class="text-base font-bold text-gray-900 mt-8 mb-4 leading-normal" style="'
)
WHERE content LIKE '%<h3>%' OR content LIKE '%<h3 %';
```

4. Verifique os resultados:

```sql
-- VERIFICAÇÃO
SELECT
  title,
  CASE
    WHEN content LIKE '%<h2 class="text-lg%' THEN 'H2 Atualizado ✓'
    ELSE 'H2 Pendente'
  END as status_h2,
  CASE
    WHEN content LIKE '%<h3 class="text-base%' THEN 'H3 Atualizado ✓'
    ELSE 'H3 Pendente'
  END as status_h3
FROM blog_posts
WHERE is_published = true
ORDER BY published_at DESC
LIMIT 10;
```

### Método 2: Usar Service Role Key via Node.js

1. Obtenha a `service_role` key:
   - Acesse: https://app.supabase.com/project/vtsqvmmhgekwdwihyaax/settings/api
   - Copie a chave "service_role" (secret)

2. Adicione ao arquivo `.env.local`:
   ```
   SUPABASE_SERVICE_ROLE_KEY=sua-service-role-key-aqui
   ```

3. Execute o script:
   ```bash
   node update-headings-with-service-key.js
   ```

## O que aconteceu?

1. ✓ Scripts criados corretamente
2. ✓ Conexão com Supabase estabelecida
3. ✓ Posts identificados (34 posts com H2/H3)
4. ✗ UPDATEs bloqueados por RLS
5. ✗ 0 posts atualizados

## Posts Afetados

- Total de posts: 37
- Posts com H2: 34
- Posts com H3: 34
- Posts atualizados: 0 (bloqueado)

## Arquivos Disponíveis

1. `update-headings-with-service-key.js` - Script completo com service key
2. `verify-updates.js` - Verificar status após updates
3. `RELATORIO_ATUALIZACAO.md` - Relatório completo detalhado

## Próximos Passos

1. Escolha o Método 1 (SQL Editor) ou Método 2 (Service Key)
2. Execute as atualizações
3. Verifique os resultados executando:
   ```bash
   node verify-updates.js
   ```

---

**Observação**: O MCP do Supabase não está disponível como ferramenta standalone neste ambiente. As atualizações foram tentadas via API REST do Supabase usando a biblioteca `@supabase/supabase-js`.
