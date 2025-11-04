# 🏗️ ARQUITETURA DE COMPONENTES - LANDING PAGES
## Projeto Google Ads Starter - Método FOCCO

**Data:** 05/11/2025
**Status:** Estrutura definida - Pronta para implementação

---

## 📁 ESTRUTURA DE ARQUIVOS

```
src/
├── types/
│   └── landing.ts                    ✅ CRIADO
│
├── components/
│   ├── landing/
│   │   ├── README.md                 (este arquivo explicando os componentes)
│   │   │
│   │   ├── HeroSection.tsx           [PRIORIDADE 1]
│   │   ├── FormularioSection.tsx     [PRIORIDADE 1]
│   │   ├── CTAWhatsAppSection.tsx    [PRIORIDADE 1]
│   │   │
│   │   ├── ProblemsSection.tsx       [PRIORIDADE 2]
│   │   ├── PilaresSection.tsx        [PRIORIDADE 2]
│   │   ├── BeneficiosSection.tsx     [PRIORIDADE 2]
│   │   ├── DepoimentosSection.tsx    [PRIORIDADE 2]
│   │   │
│   │   ├── TimelineSection.tsx       [PRIORIDADE 3]
│   │   ├── SobreValeriaSection.tsx   [PRIORIDADE 3]
│   │   ├── FAQSection.tsx            [PRIORIDADE 3]
│   │   └── ResultadosNumerosSection.tsx [PRIORIDADE 3]
│   │
│   ├── Header.tsx                    ✅ EXISTENTE
│   └── Footer.tsx                    ✅ EXISTENTE
│
└── pages/
    ├── AgendamentoA.tsx              [Landing Page A]
    ├── AgendamentoB.tsx              [Landing Page B]
    ├── AgendamentoC.tsx              [Landing Page C]
    └── AgendamentoD.tsx              [Landing Page D]
```

---

## 🎯 FILOSOFIA DE DESIGN

### Princípios:
1. **DRY (Don't Repeat Yourself)**
   - Um componente, múltiplas variações via props

2. **Composition over Inheritance**
   - Páginas compostas por seções independentes

3. **Flexibility**
   - Props controlam comportamento e aparência

4. **Performance**
   - Lazy loading de imagens
   - Code splitting por rota

---

## 🧩 COMPONENTES DETALHADOS

### 1. HeroSection.tsx
**Propósito:** Seção hero diferente em cada landing page

**Props:**
```typescript
interface HeroSectionProps {
  variant: 'transformation' | 'professional' | 'method' | 'testimonial';
  headline: string;
  subheadline: string;
  ctaPrimary: { text: string; icon?: string; onClick: () => void };
  ctaSecondary?: { text: string; icon?: string; onClick: () => void };
  backgroundImage: string;
  proofText: string;
  colors?: { primary: string; accent: string };
}
```

**Variações:**
- `transformation`: Imagem inspiracional, cores calmas (azul/verde)
- `professional`: Imagem corporativa, cores confiança (azul escuro/dourado)
- `method`: Imagem científica/abstrata, cores premium (roxo/turquesa)
- `testimonial`: Foto real de cliente, cores acolhedoras (verde/amarelo)

**Responsabilidades:**
- Renderizar headline/subheadline
- 2 CTAs (primário e secundário)
- Background image com overlay
- Prova social (badge de credibilidade)
- Animações de entrada

---

### 2. FormularioSection.tsx
**Propósito:** Formulário de captura (IDÊNTICO nas 4 páginas)

**Props:**
```typescript
interface FormularioSectionProps {
  ctaText: string; // Ex: "Agende sua Sessão Diagnóstica Gratuita"
  variant: LandingPageVariant; // Para tracking GA4
  onSubmit: (data: FormData) => void;
}
```

**Campos:**
- Nome (obrigatório)
- Email (obrigatório, validação)
- WhatsApp (obrigatório, máscara)
- Mensagem (opcional, textarea)

**Funcionalidades:**
- Validação client-side
- Feedback visual (loading, success, error)
- Integração GA4: evento `form_submit_landing_${variant}`
- Animações de validação
- Botão desabilita durante submit

**Integrações:**
- Backend: API para salvar lead
- GA4: Evento de conversão diferenciado
- Supabase: Salvar no banco

---

### 3. CTAWhatsAppSection.tsx
**Propósito:** CTA final para WhatsApp

**Props:**
```typescript
interface CTAWhatsAppSectionProps {
  message: string; // Mensagem pré-definida do WhatsApp
  whatsappNumber: string;
  variant: LandingPageVariant;
  headline: string;
  subheadline: string;
  urgency?: boolean; // Página D: true
}
```

**Comportamento:**
- Botão grande e destacado
- Rastreamento: `whatsapp_click_landing_${variant}`
- Se `urgency=true`: adicionar texto "Vagas limitadas este mês"
- Abre WhatsApp em nova aba
- Cores adaptadas à página

---

### 4. ProblemsSection.tsx
**Propósito:** Mostrar 4 problemas que o método resolve

**Props:**
```typescript
interface ProblemsSectionProps {
  problems: Problem[];
  focus: 'personal' | 'professional';
}
```

**Usado em:**
- Página A: Foco personal
- Página B: Foco professional

**Layout:**
- Grid 2x2 (mobile: 1 coluna)
- Card com ícone + título + descrição
- Hover effect

---

### 5. PilaresSection.tsx
**Propósito:** Explicar os 5 pilares do FOCCO

**Props:**
```typescript
interface PilaresSectionProps {
  pilares: Pilar[];
  detailLevel: 'normal' | 'deep';
}
```

**Variações:**
- `normal`: Tabs interativos (como Index atual)
- `deep`: Versão expandida com explicação científica (página C)

**Funcionalidades:**
- Tabs clicáveis
- Transições suaves
- Indicadores de navegação
- Ícones FontAwesome

---

### 6. BeneficiosSection.tsx
**Propósito:** Lista de benefícios

**Props:**
```typescript
interface BeneficiosSectionProps {
  beneficios: Beneficio[];
  focus: 'personal' | 'professional' | 'general';
  withImage?: boolean;
  image?: string;
}
```

**Layout:**
- Grid 2 colunas (3x2)
- Se `withImage=true`: Grid 2 cols (esquerda: lista, direita: imagem)
- Card com ícone + texto

---

### 7. DepoimentosSection.tsx
**Propósito:** Exibir depoimentos de clientes

**Props:**
```typescript
interface DepoimentosSectionProps {
  depoimentos: Depoimento[];
  layout: 'cards' | 'gallery' | 'carousel';
  showRating?: boolean;
}
```

**Layouts:**
- `cards`: 3 cards lado a lado (páginas A, B, C)
- `gallery`: Grid grande com 6-8 depoimentos (página D)
- `carousel`: Carrossel infinito (página D - seção adicional)

**Card de depoimento:**
- Foto (circular)
- Nome + profissão + cidade
- Rating (estrelas)
- Depoimento (texto)
- Se tiver "antes/depois": mostrar em destaque

---

### 8. TimelineSection.tsx
**Propósito:** Mostrar processo "Como funciona" (apenas página C)

**Props:**
```typescript
interface TimelineSectionProps {
  steps: TimelineStep[];
}
```

**Layout:**
- Timeline vertical (desktop)
- Cards sequenciais (mobile)
- Ícones conectados por linha

**Passos típicos:**
1. Sessão diagnóstica (30 min)
2. Plano personalizado
3. 8-12 sessões
4. Acompanhamento
5. Resultados sustentáveis

---

### 9. SobreValeriaSection.tsx
**Propósito:** Apresentar Valéria Dias

**Props:**
```typescript
interface SobreValeriaSectionProps {
  variant: 'brief' | 'detailed';
  foto: string;
  bio: string;
  credenciais: string[];
}
```

**Variações:**
- `brief`: 1 parágrafo + foto (páginas A, B, D)
- `detailed`: Bio completa + credenciais + experiência (página C)

---

### 10. FAQSection.tsx
**Propósito:** Perguntas frequentes (apenas página C)

**Props:**
```typescript
interface FAQSectionProps {
  faqs: FAQ[];
}
```

**Layout:**
- Accordion (um de cada vez)
- Ícone + animação
- 5-7 perguntas sobre o método

---

### 11. ResultadosNumerosSection.tsx
**Propósito:** Estatísticas de impacto (destaque página D)

**Props:**
```typescript
interface ResultadosNumerosSectionProps {
  resultados: {
    numero: string;
    label: string;
    icon: string;
  }[];
}
```

**Exemplos:**
- 500+ vidas transformadas
- 95% de satisfação
- 10+ anos de experiência
- 1.000+ sessões realizadas

**Layout:**
- Grid 2x2 ou 4 colunas
- Animação de contagem (count-up)
- Cards com ícones

---

## 🎨 DESIGN TOKENS

### Cores por página:

```typescript
const pageColors = {
  a: {
    primary: '#2C5F6F',    // Azul turquesa
    accent: '#10B981',     // Verde crescimento
    gradient: 'from-[#2C5F6F] to-[#10B981]',
  },
  b: {
    primary: '#1E3A8A',    // Azul corporativo
    accent: '#F59E0B',     // Dourado sucesso
    gradient: 'from-[#1E3A8A] to-[#F59E0B]',
  },
  c: {
    primary: '#7C3AED',    // Roxo inovação
    accent: '#06B6D4',     // Turquesa
    gradient: 'from-[#7C3AED] to-[#06B6D4]',
  },
  d: {
    primary: '#059669',    // Verde confiança
    accent: '#EAB308',     // Amarelo felicidade
    gradient: 'from-[#059669] to-[#EAB308]',
  },
};
```

### Classes Tailwind reutilizáveis:

```typescript
// Hero
'hero-section': 'relative min-h-[90vh] flex items-center justify-center'
'hero-content': 'container-custom text-center px-4'
'hero-headline': 'text-5xl md:text-6xl font-bold mb-6'
'hero-subheadline': 'text-xl md:text-2xl mb-8'

// Sections
'section-padding': 'py-20 md:py-28'
'container-custom': 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'

// Cards
'card-elevated': 'bg-card rounded-2xl shadow-lg p-6'
'card-outline': 'border-2 border-border rounded-2xl p-6'

// Buttons
'btn-primary': 'bg-primary text-primary-foreground px-8 py-4 rounded-xl'
'btn-secondary': 'bg-secondary text-secondary-foreground px-8 py-4 rounded-xl'
```

---

## 📊 TRACKING GA4

### Eventos por página:

```typescript
// Página A
'page_view_landing_a'
'cta_click_landing_a'
'form_submit_landing_a'
'whatsapp_click_landing_a'
'section_view_landing_a' // Scroll tracking

// Página B
'page_view_landing_b'
'cta_click_landing_b'
'form_submit_landing_b'
'whatsapp_click_landing_b'
'section_view_landing_b'

// Página C
'page_view_landing_c'
'cta_click_landing_c'
'form_submit_landing_c'
'whatsapp_click_landing_c'
'faq_click_landing_c' // Expansão de FAQ
'section_view_landing_c'

// Página D
'page_view_landing_d'
'cta_click_landing_d'
'form_submit_landing_d'
'whatsapp_click_landing_d'
'testimonial_view_landing_d' // Visualização de depoimento
'section_view_landing_d'
```

### Implementação:

```typescript
// utils/analytics.ts
export const trackEvent = (
  eventName: string,
  variant: LandingPageVariant,
  params?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', `${eventName}_landing_${variant}`, {
      page_variant: variant,
      ...params,
    });
  }
};
```

---

## 🚀 ORDEM DE IMPLEMENTAÇÃO

### DIA 2 (06/11) - Páginas A e B:
1. ✅ Criar tipos (landing.ts)
2. ⏳ Criar HeroSection.tsx
3. ⏳ Criar FormularioSection.tsx
4. ⏳ Criar CTAWhatsAppSection.tsx
5. ⏳ Criar ProblemsSection.tsx
6. ⏳ Criar PilaresSection.tsx (versão normal)
7. ⏳ Criar BeneficiosSection.tsx
8. ⏳ Criar DepoimentosSection.tsx (layout cards)
9. ⏳ Criar AgendamentoA.tsx (compor seções)
10. ⏳ Criar AgendamentoB.tsx (compor seções)
11. ⏳ Testar responsividade

### DIA 3 (07/11) - Páginas C e D:
1. ⏳ Adaptar PilaresSection para versão "deep"
2. ⏳ Criar TimelineSection.tsx
3. ⏳ Criar SobreValeriaSection.tsx
4. ⏳ Criar FAQSection.tsx
5. ⏳ Criar ResultadosNumerosSection.tsx
6. ⏳ Adaptar DepoimentosSection para layout "gallery"
7. ⏳ Criar AgendamentoC.tsx (compor seções)
8. ⏳ Criar AgendamentoD.tsx (compor seções)
9. ⏳ Testar todas as 4 páginas
10. ⏳ Enviar preview para cliente

---

## 📝 EXEMPLO DE COMPOSIÇÃO DE PÁGINA

### AgendamentoA.tsx (Transformação Pessoal):

```typescript
import { HeroSection } from '@/components/landing/HeroSection';
import { ProblemsSection } from '@/components/landing/ProblemsSection';
// ... outros imports

const AgendamentoA = () => {
  const heroContent = {
    variant: 'transformation',
    headline: 'Transforme sua vida em 90 dias com o Método FOCCO',
    subheadline: 'Supere bloqueios, conquiste clareza mental...',
    // ...
  };

  return (
    <div className="min-h-screen">
      <Header />

      <HeroSection {...heroContent} />

      <ProblemsSection
        problems={problemsPersonal}
        focus="personal"
      />

      <PilaresSection
        pilares={pilaresFocco}
        detailLevel="normal"
      />

      <BeneficiosSection
        beneficios={beneficiosPersonal}
        focus="personal"
        withImage={true}
        image="/assets/beneficios.jpg"
      />

      <DepoimentosSection
        depoimentos={depoimentos.slice(0, 3)}
        layout="cards"
      />

      <FormularioSection
        ctaText="Agende sua Sessão Diagnóstica Gratuita"
        variant="a"
        onSubmit={handleSubmit}
      />

      <CTAWhatsAppSection
        message="Olá! Vi a página de Transformação Pessoal..."
        whatsappNumber="5583993787450"
        variant="a"
        headline="Pronto para começar?"
      />

      <Footer />
    </div>
  );
};
```

---

## ✅ CHECKLIST DE QUALIDADE

Para cada componente:
- [ ] Props com TypeScript tipado
- [ ] Responsivo (mobile-first)
- [ ] Acessível (ARIA labels)
- [ ] Performance (lazy load imagens)
- [ ] Animações suaves
- [ ] GA4 tracking implementado
- [ ] Testado em Chrome/Firefox/Safari
- [ ] Testado em iPhone/Android
- [ ] Código documentado
- [ ] Reutilizável

---

## 🎯 MÉTRICAS DE PERFORMANCE

### Targets:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **Lighthouse Score**: > 90

### Otimizações:
- Imagens em WebP
- Lazy loading
- Code splitting
- Minificação
- CDN (Cloudflare)

---

**Status:** ✅ ARQUITETURA DEFINIDA - PRONTO PARA IMPLEMENTAÇÃO
**Próxima etapa:** Aguardar materiais da cliente → Desenvolver componentes
**Desenvolvido por:** Claude Code
**Data:** 05/11/2025
