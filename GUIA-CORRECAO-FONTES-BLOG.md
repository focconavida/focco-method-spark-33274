# 🔧 GUIA: Correção de Tamanho de Fontes no Blog

## 🎯 PROBLEMA IDENTIFICADO

**Situação:**
- ✅ Parte superior do post (título principal, metadata): **PERFEITA**
- ❌ Títulos H2 e H3 **dentro do conteúdo**: **MUITO GRANDES**

**Causa Raiz:**
O problema está no **banco de dados**. Os posts têm HTML sem classes Tailwind, e quando usamos `dangerouslySetInnerHTML`, os estilos do CSS podem não ser aplicados corretamente em alguns navegadores ou com cache ativo.

```html
<!-- No banco (atual) -->
<h2>O problema com "saia da sua zona de conforto"</h2>
<h3>O que realmente é zona de conforto</h3>

<!-- O que aparece: -->
H2: ~24px (muito grande!)
H3: ~20px (não se destaca do texto)
```

---

## ✅ SOLUÇÃO: SQL de Correção

Criei o arquivo **`CORRECAO-TAMANHO-FONTES-POSTS.sql`** que:

1. **Adiciona classes Tailwind inline** nos H2 e H3
2. **Garante estilos consistentes** mesmo com cache
3. **Atualiza todos os posts automaticamente**

---

## 📋 COMO USAR

### PASSO 1: Acessar Supabase

1. Acesse: https://supabase.com
2. Login com `projetofocconavida@gmail.com`
3. Selecione o projeto **FOCCO Blog**
4. Menu lateral: **SQL Editor**

### PASSO 2: Executar o SQL

1. Clique em **+ New Query**
2. Abra o arquivo: `/root/projetos/.sites/focco-institucional/CORRECAO-TAMANHO-FONTES-POSTS.sql`
3. **Copie TODO o conteúdo**
4. Cole no editor SQL do Supabase
5. Clique em **RUN** (ou Ctrl+Enter)

### PASSO 3: Verificar Resultados

O próprio SQL mostra:
```sql
-- Quantidade de posts atualizados
posts_com_h2: X
h2_com_classes: X

posts_com_h3: Y
h3_com_classes: Y

-- Exemplo de H2 atualizado
<h2 class="text-lg font-bold text-gray-900 mt-10 mb-5 leading-snug">
```

### PASSO 4: Limpar Cache (IMPORTANTE!)

Depois de rodar o SQL:

1. **No navegador:**
   - Ctrl+Shift+R (Windows/Linux)
   - Cmd+Shift+R (Mac)
   - Ou: F12 > Network > Disable cache

2. **No Cloudflare:**
   - Acesse: https://dash.cloudflare.com
   - Seu domínio: `focconavida.com.br`
   - Caching > **Purge Cache** > **Purge Everything**

---

## 🎨 O QUE VAI MUDAR

### ANTES (Atual no Banco):
```html
<h2>Título Grande</h2>              <!-- ~24px -->
<h3>Subtítulo Sem Destaque</h3>     <!-- ~20px -->
<p>Texto normal</p>                 <!-- 16px -->
```

**Hierarquia Ruim:**
```
Título principal: 30px ✓
  └─ H2: 24px ✗ (muito perto do principal)
     └─ H3: 20px ✗ (não se destaca)
        └─ Texto: 16px
```

### DEPOIS (Com SQL Aplicado):
```html
<h2 class="text-lg font-bold text-gray-900 mt-10 mb-5 leading-snug">
  Título Proporcional
</h2>                                <!-- 18px -->

<h3 class="text-base font-bold text-gray-900 mt-8 mb-4 leading-normal">
  Subtítulo Destacado
</h3>                                <!-- 16px bold -->

<p>Texto normal</p>                 <!-- 16px -->
```

**Hierarquia Corrigida:**
```
Título principal: 30px ✓
  └─ H2: 18px ✓ (25% menor, proporcional)
     └─ H3: 16px bold ✓ (destaca pelo peso)
        └─ Texto: 16px normal
```

---

## 📊 COMPARAÇÃO VISUAL

```
┌─────────────────────────────────────────────┐
│ ANTES (Muito Grande)                        │
├─────────────────────────────────────────────┤
│                                             │
│ Título Principal do Post                    │
│ 30px - PERFEITO ✓                          │
│                                             │
│ ───────────────────────────────────────     │
│                                             │
│ O PROBLEMA COM "SAIA DA SUA ZONA"           │
│ 24px - MUITO GRANDE ✗                       │
│                                             │
│ O que realmente é zona de conforto          │
│ 20px - NÃO SE DESTACA ✗                    │
│                                             │
│ Texto normal texto normal...                │
│ 16px                                        │
│                                             │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ DEPOIS (Proporcional)                       │
├─────────────────────────────────────────────┤
│                                             │
│ Título Principal do Post                    │
│ 30px - MANTIDO ✓                           │
│                                             │
│ ───────────────────────────────────────     │
│                                             │
│ O problema com "saia da sua zona"           │
│ 18px - PROPORCIONAL ✓                       │
│                                             │
│ O que realmente é zona de conforto          │
│ 16px BOLD - SE DESTACA ✓                   │
│                                             │
│ Texto normal texto normal...                │
│ 16px                                        │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 🔍 DETALHES TÉCNICOS

### Classes Aplicadas:

**H2 (Títulos Principais):**
```css
text-lg           → 18px (1.125rem)
font-bold         → weight 700
text-gray-900     → #111827
mt-10             → margin-top 2.5rem
mb-5              → margin-bottom 1.25rem
leading-snug      → line-height 1.375
```

**H3 (Subtítulos):**
```css
text-base         → 16px (1rem)
font-bold         → weight 700 (destaque!)
text-gray-900     → #111827
mt-8              → margin-top 2rem
mb-4              → margin-bottom 1rem
leading-normal    → line-height 1.5
```

### Estratégia Dupla:

O SQL usa **2 estratégias** para garantir aplicação:

1. **Classes Tailwind** (preferencial):
   ```html
   <h2 class="text-lg font-bold...">
   ```

2. **Estilos inline** (fallback):
   ```html
   <h2 style="font-size: 1.125rem; font-weight: 700...">
   ```

Isso garante que funcione mesmo se:
- Cache do Tailwind estiver ativo
- CSS não carregar corretamente
- Navegador tiver problemas com classes

---

## ⚠️ IMPORTANTE

### Segurança:
- ✅ O Supabase mantém **backup automático**
- ✅ Você pode reverter a qualquer momento
- ✅ SQL apenas adiciona classes, não remove conteúdo

### Quando Executar:
- 🕐 **Agora:** Para corrigir posts existentes
- 🕐 **Futuros posts:** Já criar com as classes corretas

### Posts Novos:
Para novos posts, use este formato:

```sql
INSERT INTO blog_posts (title, content, ...) VALUES (
  'Título do Post',
  '<h2 class="text-lg font-bold text-gray-900 mt-10 mb-5 leading-snug">
    Título da Seção
  </h2>

  <h3 class="text-base font-bold text-gray-900 mt-8 mb-4 leading-normal">
    Subtítulo
  </h3>',
  ...
);
```

---

## ✅ CHECKLIST PÓS-EXECUÇÃO

Depois de rodar o SQL:

- [ ] Verificar logs do Supabase (deve mostrar "X rows updated")
- [ ] Purgar cache do Cloudflare
- [ ] Limpar cache do navegador (Ctrl+Shift+R)
- [ ] Abrir um post: https://focconavida.com.br/blog/como-sair-da-zona-de-conforto-sem-se-perder
- [ ] Verificar que H2 estão ~18px (menores)
- [ ] Verificar que H3 estão em bold (destaque)
- [ ] Testar em mobile e desktop

---

## 🎯 RESULTADO ESPERADO

Após executar o SQL e limpar cache:

✅ Título principal: **30px** (mantido)
✅ H2 no conteúdo: **18px** (25% menor)
✅ H3 no conteúdo: **16px bold** (destacado)
✅ Hierarquia visual **perfeita**
✅ Layout **profissional**
✅ Blog **100% otimizado**

---

## 📞 SUPORTE

Se algo der errado:

1. **Reverter no Supabase:**
   - SQL Editor > History
   - Encontre o comando anterior
   - Copie o conteúdo original

2. **Limpar e recarregar:**
   - Purgar cache Cloudflare
   - Hard refresh no navegador

3. **Contato:**
   - GitHub Issues: https://github.com/focconavida/focco-method-spark-33274/issues

---

## 🚀 PRONTO PARA EXECUTAR!

**Arquivo:** `/root/projetos/.sites/focco-institucional/CORRECAO-TAMANHO-FONTES-POSTS.sql`

**Ação:** Copiar > Colar no Supabase SQL Editor > RUN > Purgar Cache

**Tempo:** ~2 minutos

**Resultado:** Blog com hierarquia tipográfica perfeita! 🎉
