# Como Aplicar as Imagens Reais nos Artigos do Blog

## 📋 O Que Foi Feito

Selecionei 10 imagens profissionais de alta qualidade do Unsplash para cada um dos artigos do blog. As imagens estão hospedadas no CDN do Unsplash e carregam super rápido.

## 🎯 Opção 1: Aplicar via Supabase Dashboard (MAIS FÁCIL)

### Passo 1: Acessar o Supabase
1. Acesse https://supabase.com
2. Faça login na sua conta
3. Selecione o projeto `focconavida`

### Passo 2: Abrir o SQL Editor
1. No menu lateral, clique em **"SQL Editor"**
2. Clique em **"New query"**

### Passo 3: Executar o Script
1. Copie todo o conteúdo do arquivo `apply-real-images.sql`
2. Cole no SQL Editor
3. Clique em **"Run"** ou pressione `Ctrl+Enter`

### Passo 4: Verificar
A última linha do script já mostra todos os artigos com suas novas imagens!

## 🎯 Opção 2: Aplicar via Terminal (para desenvolvedores)

```bash
# Entre na pasta do projeto
cd /root/projetos/landpage-focco/focco-method-spark-33274

# Execute o script (substitua pelos seus dados de conexão)
psql "postgresql://seu-usuario:sua-senha@seu-host:5432/seu-banco" -f apply-real-images.sql
```

## 🖼️ Imagens Aplicadas

### 1. Por que procrastino tanto?
![Procrastinação](https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&q=80)
- **Tema:** Pessoa estressada no trabalho com laptop
- **Fotógrafo:** Tim Gouw

### 2. A importância de aprender a dizer não
![Dizer não](https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1200&q=80)
- **Tema:** Mulher profissional confiante
- **Fotógrafo:** LinkedIn Sales Navigator

### 3. A importância da respiração consciente
![Respiração](https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80)
- **Tema:** Meditação ao ar livre
- **Fotógrafo:** Jared Rice

### 4. Como saber se é hora de mudar de carreira
![Mudança de carreira](https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80)
- **Tema:** Caminho bifurcado, escolhas
- **Fotógrafo:** Jens Lelie

### 5. Técnicas simples para reduzir o estresse no dia a dia
![Estresse](https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1200&q=80)
- **Tema:** Relaxamento com chá
- **Fotógrafo:** Kelvin Valerio

### 6. O papel das emoções no equilíbrio da vida
![Emoções](https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1200&q=80)
- **Tema:** Paz interior, serenidade
- **Fotógrafo:** Brooke Cagle

### 7. Ansiedade: quando a modernidade cobra seu preço
![Ansiedade](https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1200&q=80)
- **Tema:** Pessoa preocupada com smartphone
- **Fotógrafo:** Christian Erfurt

### 8. Por que fazer pausas é essencial para a produtividade
![Pausas](https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80)
- **Tema:** Café e descanso
- **Fotógrafo:** Jakub Dziubak

### 9. Inteligência emocional: a chave para o sucesso profissional
![Inteligência emocional](https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80)
- **Tema:** Equipe colaborando
- **Fotógrafo:** Priscilla Du Preez

### 10. Mudança de hábitos: por onde começar?
![Hábitos](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80)
- **Tema:** Novo começo, transformação
- **Fotógrafo:** Jens Lelie

## ✅ Vantagens das Imagens do Unsplash

- **Gratuitas:** Uso livre com atribuição
- **Alta qualidade:** 1200px de largura, 80% de qualidade
- **CDN global:** Carregamento super rápido em qualquer lugar do mundo
- **Profissionais:** Fotos de altíssima qualidade de fotógrafos profissionais
- **Sem download:** URLs diretas, não precisa fazer upload

## 🔍 Como Verificar se Funcionou

Depois de executar o script:

1. Acesse o site: https://focconavida.com.br/blog
2. Verifique se as imagens aparecem nos cards dos artigos
3. Clique em cada artigo e veja se a imagem aparece no topo

## 🛠️ Troubleshooting

### As imagens não aparecem?

1. **Verifique o script:** Certifique-se de que executou o script completo
2. **Cache do browser:** Limpe o cache (Ctrl+Shift+R)
3. **Verifique o componente:** O componente BlogPost deve ler a coluna `cover_image`
4. **Verifique a API:** Confirme que o endpoint retorna o campo `cover_image`

### Quer trocar alguma imagem?

Basta alterar a URL no script `apply-real-images.sql` para a imagem que desejar do Unsplash:

```sql
UPDATE blog_posts
SET cover_image = 'NOVA_URL_AQUI'
WHERE slug = 'slug-do-artigo';
```

## 📞 Precisa de Ajuda?

Se tiver qualquer dúvida, é só me chamar!
