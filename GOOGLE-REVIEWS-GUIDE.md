# 📊 Guia: Como Adicionar Avaliações Reais do Google

## ✅ O que já está pronto:

O widget de avaliações do Google já está implementado e funcionando no site!

**Localização:** Página inicial (Home), seção "O que dizem nossos clientes"

---

## 🔧 Como adicionar as avaliações REAIS:

### **OPÇÃO 1: Adicionar Manualmente (RECOMENDADO - Mais Simples)**

#### Passo 1: Copiar as avaliações do Google
1. Acesse seu perfil: https://maps.app.goo.gl/6mLXML44sgmziWrL8
2. Anote as melhores avaliações (nome da pessoa, texto, quantidade de estrelas)

#### Passo 2: Editar o arquivo GoogleReviews.tsx
Abra o arquivo: `src/components/GoogleReviews.tsx`

Encontre a seção `mockReviews` (linha ~23) e substitua pelos dados reais:

```typescript
const mockReviews: Review[] = [
  {
    author: "Maria Santos",  // ← Nome real do Google
    rating: 5,               // ← Quantidade de estrelas (1-5)
    text: "Experiência incrível! A Valéria mudou minha vida com o Método FOCCO.",  // ← Texto real
    time: "2 semanas atrás"  // ← Tempo aproximado
  },
  {
    author: "João Silva",
    rating: 5,
    text: "Profissional excepcional, recomendo!",
    time: "1 mês atrás"
  },
  // Adicione quantas avaliações quiser
];
```

#### Passo 3: Atualizar nota média e total
Na mesma função, atualize (linha ~38):

```typescript
setRating(5.0);  // ← Nota média (ex: 4.8, 5.0)
setTotalReviews(mockReviews.length);  // ← Deixe assim (conta automaticamente)
```

---

### **OPÇÃO 2: API do Google Places (Automático, mas requer configuração)**

#### Vantagens:
- ✅ Atualiza automaticamente
- ✅ Não precisa adicionar manualmente

#### Desvantagens:
- ❌ Requer API Key do Google (gratuita até 25.000 requisições/dia)
- ❌ Requer configuração técnica

#### Como fazer:

1. **Criar API Key do Google:**
   - Acesse: https://console.cloud.google.com/
   - Crie um projeto novo
   - Ative a API "Places API"
   - Gere uma API Key
   - Restrinja a key para o domínio do site

2. **Adicionar a API Key no código:**

   Crie um arquivo `.env` na raiz do projeto:
   ```
   VITE_GOOGLE_PLACES_API_KEY=sua-api-key-aqui
   ```

3. **Atualizar o código GoogleReviews.tsx:**

   Substitua a seção `useEffect` por:

   ```typescript
   useEffect(() => {
     const fetchReviews = async () => {
       const placeId = 'ChIJdSDgTIlPnQARNyi8FUG6puk'; // Place ID do FOCCO
       const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;

       try {
         const response = await fetch(
           `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`
         );
         const data = await response.json();

         if (data.result) {
           const googleReviews = data.result.reviews.map((review: any) => ({
             author: review.author_name,
             rating: review.rating,
             text: review.text,
             time: review.relative_time_description
           }));

           setReviews(googleReviews.slice(0, 3)); // Primeiras 3 avaliações
           setRating(data.result.rating);
           setTotalReviews(data.result.user_ratings_total);
         }
       } catch (error) {
         console.error('Erro ao buscar avaliações:', error);
       } finally {
         setLoading(false);
       }
     };

     fetchReviews();
   }, []);
   ```

---

## 💡 Recomendação:

**Use a OPÇÃO 1 (Manual)** porque:
- ✅ Mais simples e rápido
- ✅ Você controla quais avaliações aparecem (pode escolher as melhores)
- ✅ Sem custo ou configuração extra
- ✅ Sem risco de exceder limite de API

**Atualize as avaliações manualmente** a cada 1-2 meses quando tiver novas avaliações boas.

---

## 📝 Exemplo de como ficará:

```
┌─────────────────────────────────────────┐
│        Google Avaliações                │
│                                         │
│           ⭐ 5.0                        │
│        ⭐⭐⭐⭐⭐                       │
│   Baseado em 15 avaliações              │
│                                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐ │
│  │ Maria   │  │ João    │  │ Ana     │ │
│  │ ⭐⭐⭐  │  │ ⭐⭐⭐  │  │ ⭐⭐⭐  │ │
│  │ "Texto" │  │ "Texto" │  │ "Texto" │ │
│  └─────────┘  └─────────┘  └─────────┘ │
│                                         │
│  Ver todas as avaliações no Google →   │
└─────────────────────────────────────────┘
```

---

## 🎯 Próximos passos:

1. Copie as melhores avaliações do seu Google
2. Edite o arquivo `src/components/GoogleReviews.tsx`
3. Faça commit e push das alterações
4. Pronto! As avaliações reais estarão no site

---

**Dúvidas?** Me chame que te ajudo! 🚀
