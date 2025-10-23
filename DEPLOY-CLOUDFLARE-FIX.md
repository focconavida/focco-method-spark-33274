# 🚀 Como Corrigir o Site em Produção (Cloudflare Pages)

## 🔴 PROBLEMA ATUAL

O site https://focconavida.com.br/ está mostrando erro:
```
Supabase URL or Anon Key is missing. Please check your .env file.
```

**Causa:** As variáveis de ambiente não estão configuradas no Cloudflare Pages.

---

## ✅ SOLUÇÃO - 2 OPÇÕES

### **OPÇÃO 1: Configurar Variáveis no Cloudflare (Recomendado)**

#### Passo 1: Acessar Cloudflare Dashboard
1. Acesse https://dash.cloudflare.com/
2. Faça login com sua conta
3. Vá em **Workers & Pages** (menu lateral)
4. Encontre o projeto **focco-method-spark-33274**

#### Passo 2: Adicionar Variáveis de Ambiente
1. Clique no projeto
2. Vá na aba **Settings** (Configurações)
3. Role até **Environment Variables** (Variáveis de Ambiente)
4. Clique em **Add Variable** (Adicionar Variável)

#### Passo 3: Adicionar as 2 Variáveis

**Variável 1:**
- **Name:** `VITE_SUPABASE_URL`
- **Value:** `https://vtsqvmmhgekwdwihyaax.supabase.co`
- **Environment:** Production (e Preview se quiser)

**Variável 2:**
- **Name:** `VITE_SUPABASE_ANON_KEY`
- **Value:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0c3F2bW1oZ2Vrd2R3aWh5YWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExNjkzMzQsImV4cCI6MjA3Njc0NTMzNH0.r-9HdIIiga2DHQoBqSI1FE5__o5jrjFvg1nLAGGjwog`
- **Environment:** Production (e Preview se quiser)

#### Passo 4: Redesploy
1. Vá na aba **Deployments**
2. Clique nos 3 pontinhos do último deployment
3. Clique em **Retry deployment**
4. Aguarde o deploy finalizar (1-2 minutos)

#### Passo 5: Verificar
1. Acesse https://focconavida.com.br/
2. O site deve carregar normalmente agora! ✅

---

### **OPÇÃO 2: Deploy Manual via Dashboard**

#### Se você preferir fazer upload manual:

1. **Build já está pronto!** A pasta `dist/` contém o site compilado
2. Acesse **Cloudflare Dashboard** → **Workers & Pages**
3. Clique em **Upload assets** ou **Create application**
4. Faça upload da pasta `dist/`
5. **IMPORTANTE:** Configure as variáveis de ambiente ANTES de fazer o upload
6. Aguarde o deploy

---

## 📋 CHECKLIST

Após configurar, verifique:

- [ ] Variável `VITE_SUPABASE_URL` adicionada
- [ ] Variável `VITE_SUPABASE_ANON_KEY` adicionada
- [ ] Deployment refeito
- [ ] Site https://focconavida.com.br/ carrega sem erros
- [ ] Console do navegador sem erros de Supabase

---

## 🎯 RESUMO DAS VARIÁVEIS

Copie e cole no Cloudflare:

```env
VITE_SUPABASE_URL=https://vtsqvmmhgekwdwihyaax.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0c3F2bW1oZ2Vrd2R3aWh5YWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExNjkzMzQsImV4cCI6MjA3Njc0NTMzNH0.r-9HdIIiga2DHQoBqSI1FE5__o5jrjFvg1nLAGGjwog
```

---

## ⚡ DEPLOY AUTOMÁTICO VIA GIT (Opcional)

Se você conectou o Cloudflare ao repositório Git:

1. Faça commit das mudanças:
```bash
git add .
git commit -m "Adiciona variáveis de ambiente e corrige blog"
git push origin main
```

2. O Cloudflare vai fazer deploy automaticamente
3. **MAS** você ainda precisa configurar as variáveis no dashboard!

---

## 🔧 TROUBLESHOOTING

### Erro persiste após adicionar variáveis?

1. **Limpe o cache do Cloudflare:**
   - Dashboard → Caching → Purge Everything

2. **Verifique se as variáveis estão corretas:**
   - Settings → Environment Variables
   - Confirme que não tem espaços extras

3. **Force um novo build:**
   - Deployments → Retry deployment

### Como verificar se as variáveis foram aplicadas?

Após o deploy, abra o console do navegador em https://focconavida.com.br/

Se aparecer:
- ❌ "Supabase URL or Anon Key is missing" = Variáveis NÃO configuradas
- ✅ Site carrega normalmente = Variáveis OK!

---

## 📞 SUPORTE

Se precisar de ajuda:
1. Verifique os logs do deployment no Cloudflare
2. Confirme que as variáveis estão em "Production"
3. Tente fazer um novo deployment

---

## ✅ BUILD LOCAL JÁ ESTÁ PRONTO!

A pasta `dist/` já contém o build de produção com as correções:
- ✅ SQL do blog corrigido
- ✅ Variáveis de ambiente (.env criado)
- ✅ Todas as páginas funcionando
- ✅ Blog pronto para receber os 10 artigos

**Só falta configurar as variáveis no Cloudflare!** 🚀

---

*Criado em: Outubro 2024*
*Desenvolvido com Claude Code 🤖*
