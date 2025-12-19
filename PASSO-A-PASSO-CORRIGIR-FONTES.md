# 🚀 PASSO A PASSO: Corrigir Fontes do Blog (2 MINUTOS)

## 🎯 OBJETIVO
Fazer H2 e H3 ficarem com tamanho correto nos posts do blog.

---

## 📋 INSTRUÇÕES (SUPER SIMPLES)

### PASSO 1: Abrir Supabase
1. Acesse: https://supabase.com/dashboard/sign-in
2. Login: `projetofocconavida@gmail.com`
3. Clique no projeto do blog

### PASSO 2: Abrir SQL Editor
1. Menu lateral esquerdo: **SQL Editor**
2. Clique no botão: **+ New Query**

### PASSO 3: Copiar e Colar o SQL
1. Abra o arquivo: `EXECUTAR-AGORA-SUPABASE.sql`
2. **Copie TODO o conteúdo** (Ctrl+A, Ctrl+C)
3. Cole no editor SQL do Supabase (Ctrl+V)

### PASSO 4: Executar
1. Clique no botão **RUN** (canto inferior direito)
2. Aguarde ~5 segundos
3. Veja os resultados na tela

### PASSO 5: Limpar Cache
1. **Cloudflare:**
   - Acesse: https://dash.cloudflare.com
   - Seu domínio > Caching > **Purge Everything**

2. **Navegador:**
   - Pressione: **Ctrl + Shift + R** (Windows/Linux)
   - Ou: **Cmd + Shift + R** (Mac)

### PASSO 6: Verificar
1. Abra: https://focconavida.com.br/blog/como-sair-da-zona-de-conforto-sem-se-perder
2. Veja se os H2 estão menores ✅
3. Veja se os H3 estão em bold ✅

---

## ✅ RESULTADO ESPERADO

**No Supabase você verá:**
```
h2_atualizados: ~34
h3_atualizados: ~34
total_posts: 37
```

**No site você verá:**
- ✅ Título principal: 30px (mantido)
- ✅ H2 no conteúdo: 18px (menor!)
- ✅ H3 no conteúdo: 16px bold (destaque!)

---

## 🆘 SE DER ERRO

**Erro "permission denied":**
- Você precisa estar logado como owner do projeto
- Ou use a dashboard do Supabase (não SQL Editor)

**Erro "syntax error":**
- Certifique-se de copiar TODO o SQL (do início ao fim)

**Posts não mudaram:**
- Limpe o cache do Cloudflare (PASSO 5.1)
- Force refresh no navegador (Ctrl+Shift+R)

---

## 📝 O QUE O SQL FAZ

```sql
-- Transforma isto:
<h2>Título Grande</h2>

-- Nisto:
<h2 class="!text-lg !font-bold !text-gray-900 !mt-10 !mb-5 !leading-snug">
  Título Proporcional
</h2>
```

**Classes aplicadas:**
- `!text-lg` = 18px (era 24px)
- `!font-bold` = negrito
- `!text-gray-900` = cor escura
- `!mt-10 !mb-5` = espaçamento
- `!leading-snug` = altura da linha
- `!` = importante (sobrescreve outros estilos)

---

## 🎉 PRONTO!

Total de tempo: **~2 minutos**
- 30s copiar/colar SQL
- 5s executar
- 30s limpar cache
- 30s verificar resultado

**Problema resolvido! 🚀**
