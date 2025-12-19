# Relatório de Atualização de Headings no Blog FOCCO

## Status: BLOQUEADO POR PERMISSÕES

### Problema Identificado

As atualizações SQL não puderam ser executadas devido a **restrições de RLS (Row Level Security)** no Supabase.

### Detalhes Técnicos

1. **Chave Utilizada**: `VITE_SUPABASE_ANON_KEY` (chave pública/anon)
2. **Permissões**: Esta chave tem apenas permissões de LEITURA devido às políticas RLS
3. **Tentativas de UPDATE**: Executadas com sucesso no lado do cliente, mas **bloqueadas no servidor**
4. **Resultado**: 0 posts atualizados (apesar do código executar sem erros)

### Testes Realizados

```
=== TESTE DE PERMISSÕES ===
✓ Busca de posts: OK
✓ Comando UPDATE executado: OK
✗ Persistência dos dados: FALHOU
```

### Posts Afetados

- Total de posts no banco: **37**
- Posts com tags H2: **34**
- Posts com tags H3: **34**
- Posts atualizados: **0** (bloqueado por RLS)

### Soluções Possíveis

#### Opção 1: Usar Service Role Key (RECOMENDADO)

A `service_role` key bypassa o RLS e permite operações administrativas.

**Passos:**
1. Acesse: https://app.supabase.com/project/vtsqvmmhgekwdwihyaax/settings/api
2. Copie a chave `service_role` (secret key)
3. Adicione ao arquivo `.env.local`:
   ```
   SUPABASE_SERVICE_ROLE_KEY=sua-service-role-key-aqui
   ```
4. Execute: `node update-headings-with-service-key.js`

#### Opção 2: Ajustar Políticas RLS

Adicionar política temporária que permite UPDATEs com a chave anon:

```sql
-- No Supabase SQL Editor
CREATE POLICY "Allow anon updates" ON blog_posts
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);
```

**Atenção**: Esta abordagem é menos segura e deve ser removida após as atualizações.

#### Opção 3: Executar Direto no SQL Editor

Copie e execute os UPDATEs diretamente no SQL Editor do Supabase:

```sql
-- UPDATE 1: Atualizar H2
UPDATE blog_posts
SET content = REPLACE(
  REPLACE(
    REPLACE(content, '<h2>', '<h2 class="text-lg font-bold text-gray-900 mt-10 mb-5 leading-snug">'),
    '<h2 class="', '<h2 class="text-lg font-bold text-gray-900 mt-10 mb-5 leading-snug '
  ),
  '<h2 style="', '<h2 class="text-lg font-bold text-gray-900 mt-10 mb-5 leading-snug" style="'
)
WHERE content LIKE '%<h2>%' OR content LIKE '%<h2 %';

-- UPDATE 2: Atualizar H3
UPDATE blog_posts
SET content = REPLACE(
  REPLACE(
    REPLACE(content, '<h3>', '<h3 class="text-base font-bold text-gray-900 mt-8 mb-4 leading-normal">'),
    '<h3 class="', '<h3 class="text-base font-bold text-gray-900 mt-8 mb-4 leading-normal '
  ),
  '<h3 style="', '<h3 class="text-base font-bold text-gray-900 mt-8 mb-4 leading-normal" style="'
)
WHERE content LIKE '%<h3>%' OR content LIKE '%<h3 %';

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

### Arquivos Criados

1. `/root/projetos/.sites/focco-institucional/focco-method-spark-33274/update-headings.js` - Script inicial
2. `/root/projetos/.sites/focco-institucional/focco-method-spark-33274/update-headings-v2.js` - Script com logs detalhados
3. `/root/projetos/.sites/focco-institucional/focco-method-spark-33274/test-permissions.js` - Teste de permissões
4. `/root/projetos/.sites/focco-institucional/focco-method-spark-33274/verify-updates.js` - Verificação de resultados

### Próximos Passos

1. Escolha uma das opções acima
2. Execute as atualizações
3. Verifique os resultados com: `node verify-updates.js`

---

**Data do Relatório**: 2025-12-19
**Ambiente**: Supabase Project ID: vtsqvmmhgekwdwihyaax
