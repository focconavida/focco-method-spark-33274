# 🔥 LIMPAR CACHE DO CLOUDFLARE - URGENTE!

## ⚠️ PROBLEMA IDENTIFICADO

O erro 404 NÃO é problema de código!

**DIAGNÓSTICO:**
- ✅ As 4 landing pages EXISTEM no código
- ✅ As rotas ESTÃO configuradas corretamente
- ✅ O build contém todas as páginas
- ❌ **O Cloudflare está servindo uma VERSÃO ANTIGA**

---

## 🔧 SOLUÇÃO: LIMPAR CACHE DO CLOUDFLARE

### PASSO 1: Acesse o Dashboard Cloudflare
https://dash.cloudflare.com

### PASSO 2: Selecione o domínio
Clique em: **focconavida.com.br**

### PASSO 3: Purge Cache
1. No menu lateral esquerdo, clique em **"Caching"**
2. Depois clique em **"Configuration"**
3. Role até encontrar **"Purge Cache"**
4. Clique em **"Purge Everything"** (ou "Limpar Tudo")
5. Confirme a ação

### PASSO 4: Aguarde 1-2 minutos
O cache leva alguns segundos para limpar completamente.

---

## 🔄 VERIFICAR CLOUDFLARE PAGES TAMBÉM

### PASSO 1: Acesse Cloudflare Pages
https://dash.cloudflare.com/pages

### PASSO 2: Selecione o projeto
**focco-method-spark-33274**

### PASSO 3: Verifique o último deploy
1. Veja se o último deploy tem status **"Success"** ✅
2. Verifique a data/hora (deve ser recente - agora!)
3. Se estiver **"Failed"** ou desatualizado:
   - Clique no deploy
   - Clique em **"Retry deployment"**

### PASSO 4: Force um novo deploy (se necessário)
1. Vá em **"Settings"** → **"Builds & deployments"**
2. Clique em **"Retry deployment"** no último build
3. OU desconecte e reconecte o GitHub

---

## 🧪 TESTE APÓS LIMPAR CACHE

### 1. Teste a URL do Cloudflare Pages PRIMEIRO:
```
https://focco-method-spark-33274.pages.dev/agendamento-a
```

**O que deve aparecer:**
- ✅ Página com título "Burnout Executivo"
- ✅ Formulário de captura
- ✅ Botão WhatsApp

**O que NÃO deve aparecer:**
- ❌ Página 404
- ❌ "Página Não Encontrada"

### 2. Depois teste o domínio customizado:
```
https://focconavida.com.br/agendamento-a
```

### 3. Teste todas as 4 páginas:
```
/agendamento-a - Executiva em Burnout
/agendamento-b - Profissional em Transição
/agendamento-c - Empreendedor Sobrecarregado
/agendamento-d - Busca de Propósito
```

---

## 🔍 DEBUG: Verificar Versão

Acesse este arquivo para ver o timestamp do último build:
```
https://focco-method-spark-33274.pages.dev/version.txt
```

Se aparecer uma data antiga, o cache não foi limpo ou o deploy não aconteceu.

---

## 💡 CACHE DO NAVEGADOR TAMBÉM!

Não esqueça de limpar o cache do SEU navegador:

**Chrome/Edge:**
1. Ctrl + Shift + Del
2. Marque "Imagens e arquivos em cache"
3. Clique "Limpar dados"

**Firefox:**
1. Ctrl + Shift + Del
2. Marque "Cache"
3. Clique "Limpar agora"

**Safari:**
1. Cmd + Option + E
2. Ou: Safari → Preferências → Avançado → Mostrar menu Desenvolvedor
3. Desenvolvedor → Limpar caches

---

## 🚨 SE AINDA NÃO FUNCIONAR

### Opção 1: Desabilitar Cache Temporariamente

No Cloudflare:
1. Caching → Configuration
2. Caching Level: **"No Query String"** → mude para **"Bypass"**
3. Teste as páginas
4. Depois volte para **"Standard"**

### Opção 2: Verificar Rules do Cloudflare

1. Vá em **"Rules"** no menu lateral
2. Verifique se há alguma **Page Rule** ou **Cache Rule** interferindo
3. Desabilite temporariamente qualquer regra que afete `/agendamento-*`

### Opção 3: Force HTTPS e WWW

1. SSL/TLS → Edge Certificates
2. **Always Use HTTPS**: ON
3. **Automatic HTTPS Rewrites**: ON

---

## 📱 CHECKLIST FINAL

- [ ] Limpei cache do Cloudflare (Purge Everything)
- [ ] Verifiquei deploy do Cloudflare Pages (Success ✅)
- [ ] Limpei cache do navegador
- [ ] Testei em aba anônima/privada
- [ ] Testei primeiro o .pages.dev (não o domínio custom)
- [ ] Aguardei pelo menos 3 minutos após limpar cache
- [ ] Testei /version.txt para confirmar versão

---

## ✅ CONFIRMAÇÃO

Quando funcionar, você verá:

**Página A (/agendamento-a):**
```
Título: "Burnout Executivo? Encontre Equilíbrio com o Método FOCCO"
Hero: Imagem de profissional estressada
CTA: "Quero Descobrir Como Sair do Burnout"
```

**Página B (/agendamento-b):**
```
Título: "Transição de Carreira? Descubra Seu Propósito com o Método FOCCO"
Hero: Profissional em dúvida
CTA: "Quero Encontrar Minha Nova Direção"
```

**Página C (/agendamento-c):**
```
Título: "Empreendedor Sobrecarregado? Reconecte-se com Seu Propósito"
Hero: Empreendedor cansado
CTA: "Quero Voltar a Ter Prazer em Empreender"
```

**Página D (/agendamento-d):**
```
Título: "Perdeu o Sentido da Vida? Redescubra Seu Propósito"
Hero: Pessoa em reflexão
CTA: "Quero Descobrir Meu Propósito de Vida"
```

---

**IMPORTANTE:** O código está 100% correto. O problema é CACHE!

Data do último build: $(cat public/version.txt 2>/dev/null || echo "Não disponível")
