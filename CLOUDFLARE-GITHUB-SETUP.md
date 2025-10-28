# Guia: Deploy Automático GitHub + Cloudflare Pages

## 🎯 Objetivo
Configurar deploy automático do site focconavida.com.br usando GitHub + Cloudflare Pages

## 📋 Pré-requisitos
- [x] Projeto já está no GitHub: https://github.com/Saad-neto/focco-method-spark-33274
- [x] Conta Cloudflare configurada
- [x] Domínio focconavida.com.br já configurado no Cloudflare

## 🚀 Passo a Passo

### 1. Acessar Cloudflare Dashboard
1. Acesse: https://dash.cloudflare.com/
2. Faça login com a conta: projetofocconavida@gmail.com

### 2. Criar Projeto no Cloudflare Pages
1. No menu lateral, clique em **Workers & Pages**
2. Clique no botão **Create application**
3. Selecione a aba **Pages**
4. Clique em **Connect to Git**

### 3. Conectar ao GitHub
1. Clique em **Connect GitHub**
2. Autorize o Cloudflare a acessar sua conta do GitHub
3. Selecione o repositório: **focco-method-spark-33274**
4. Clique em **Begin setup**

### 4. Configurar o Build
Preencha as configurações:

```
Project name: focco-method-spark-33274
Production branch: main
Framework preset: Vite
Build command: npm run build
Build output directory: dist
```

### 5. Variáveis de Ambiente (IMPORTANTE!)
Antes de finalizar, adicione as variáveis de ambiente:

Clique em **Environment variables (advanced)** e adicione:

```
VITE_SUPABASE_URL = https://vtsqvmmhgekwdwihyaax.supabase.co
VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0c3F2bW1oZ2Vrd2R3aWh5YWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExNjkzMzQsImV4cCI6MjA3Njc0NTMzNH0.r-9HdIIiga2DHQoBqSI1FE5__o5jrjFvg1nLAGGjwog
```

### 6. Iniciar Deploy
1. Clique em **Save and Deploy**
2. Aguarde o build e deploy (leva cerca de 2-5 minutos)
3. Você receberá uma URL temporária: `https://focco-method-spark-33274.pages.dev`

### 7. Configurar Domínio Personalizado
1. Após o deploy finalizar, vá em **Custom domains**
2. Clique em **Set up a custom domain**
3. Digite: `focconavida.com.br`
4. Clique em **Continue**
5. O Cloudflare vai configurar automaticamente (já que o domínio está no Cloudflare)
6. Repita o processo para `www.focconavida.com.br`

## ✅ Pronto!

Agora sempre que você fizer um `git push` para o branch `main`, o Cloudflare Pages vai:
1. Detectar a mudança automaticamente
2. Fazer build do projeto
3. Fazer deploy automaticamente
4. Atualizar o site em focconavida.com.br

## 🔄 Como fazer alterações no site

```bash
# 1. Fazer alterações no código
# 2. Testar localmente
npm run dev

# 3. Fazer commit
git add .
git commit -m "Descrição das mudanças"

# 4. Enviar para GitHub
git push origin main

# 5. Aguardar deploy automático (2-5 min)
```

## 📊 Monitorar Deploys
- Acesse: https://dash.cloudflare.com/
- Workers & Pages → focco-method-spark-33274
- Aba **Deployments** para ver histórico e logs

## 🆘 Troubleshooting

### Build falhou?
1. Verifique os logs no Cloudflare Pages
2. Teste o build localmente: `npm run build`
3. Verifique se as variáveis de ambiente estão corretas

### Site não atualiza?
1. Limpe o cache do navegador (Ctrl + Shift + R)
2. Verifique se o deploy foi bem sucedido
3. Aguarde alguns minutos para propagação

### Domínio não funciona?
1. Verifique DNS no Cloudflare
2. Aguarde até 24h para propagação completa
3. Teste com `https://focco-method-spark-33274.pages.dev` primeiro

## 📞 Suporte
- Documentação Cloudflare Pages: https://developers.cloudflare.com/pages/
- Status Cloudflare: https://www.cloudflarestatus.com/
