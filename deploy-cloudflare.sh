#!/bin/bash

# ========================================
# SCRIPT DE DEPLOY CLOUDFLARE PAGES
# ========================================

echo "🚀 Deploy Automático - Cloudflare Pages"
echo ""

# Verifica se o token foi passado
if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
    echo "⚠️  CLOUDFLARE_API_TOKEN não encontrado!"
    echo ""
    echo "Para usar este script:"
    echo ""
    echo "1. Crie um token em: https://dash.cloudflare.com/profile/api-tokens"
    echo "2. Use template: 'Edit Cloudflare Workers'"
    echo "3. Execute:"
    echo ""
    echo "   export CLOUDFLARE_API_TOKEN='seu-token-aqui'"
    echo "   ./deploy-cloudflare.sh"
    echo ""
    exit 1
fi

echo "✅ Token encontrado"
echo ""

# Build de produção
echo "📦 Fazendo build de produção..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Erro no build!"
    exit 1
fi

echo "✅ Build concluído"
echo ""

# Deploy
echo "🚀 Fazendo deploy no Cloudflare Pages..."
npx wrangler pages deploy dist \
    --project-name=focco-method-spark-33274 \
    --branch=main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deploy concluído com sucesso!"
    echo ""
    echo "🌐 Acesse: https://focconavida.com.br/"
    echo ""
    echo "⚠️  IMPORTANTE: Configure as variáveis de ambiente:"
    echo ""
    echo "1. Acesse: https://dash.cloudflare.com/"
    echo "2. Workers & Pages → focco-method-spark-33274"
    echo "3. Settings → Environment Variables"
    echo "4. Adicione:"
    echo ""
    echo "   VITE_SUPABASE_URL=https://vtsqvmmhgekwdwihyaax.supabase.co"
    echo "   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0c3F2bW1oZ2Vrd2R3aWh5YWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExNjkzMzQsImV4cCI6MjA3Njc0NTMzNH0.r-9HdIIiga2DHQoBqSI1FE5__o5jrjFvg1nLAGGjwog"
    echo ""
    echo "5. Deployments → Retry deployment"
    echo ""
else
    echo "❌ Erro no deploy!"
    exit 1
fi
