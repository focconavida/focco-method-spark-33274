-- =====================================================
-- DIA 1 - PUBLICAÇÃO COMPLETA
-- Data: 04 Novembro 2025
-- 10 artigos atualizados com imagens + 2 novos artigos
-- =====================================================

-- PASSO 1: Adicionar campos de imagem (se não existirem)
ALTER TABLE blog_posts
ADD COLUMN IF NOT EXISTS cover_image TEXT,
ADD COLUMN IF NOT EXISTS cover_image_alt TEXT;

-- =====================================================
-- PASSO 2: ATUALIZAR 10 ARTIGOS EXISTENTES COM IMAGENS
-- =====================================================

-- Artigo 1: Por que procrastino tanto?
UPDATE blog_posts
SET
  cover_image = 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1200&h=630&fit=crop',
  cover_image_alt = 'Pessoa focada superando procrastinação e tomando ação'
WHERE slug = 'por-que-procrastino-tanto';

-- Artigo 2: A importância de aprender a dizer não
UPDATE blog_posts
SET
  cover_image = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=630&fit=crop',
  cover_image_alt = 'Mulher confiante estabelecendo limites saudáveis'
WHERE slug = 'importancia-de-aprender-dizer-nao';

-- Artigo 3: A importância da respiração consciente
UPDATE blog_posts
SET
  cover_image = 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=630&fit=crop',
  cover_image_alt = 'Pessoa praticando respiração consciente e mindfulness ao ar livre'
WHERE slug = 'importancia-respiracao-consciente';

-- Artigo 4: Transição de carreira com qualidade
UPDATE blog_posts
SET
  cover_image = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=630&fit=crop',
  cover_image_alt = 'Profissional em transição de carreira planejando próximos passos'
WHERE slug = 'transicao-de-carreira-com-qualidade';

-- Artigo 5: Como diminuir seu estresse
UPDATE blog_posts
SET
  cover_image = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=630&fit=crop',
  cover_image_alt = 'Pessoa em estado de relaxamento reduzindo estresse'
WHERE slug = 'como-diminuir-estresse';

-- Artigo 6: Desenvolvendo equilíbrio emocional
UPDATE blog_posts
SET
  cover_image = 'https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=1200&h=630&fit=crop',
  cover_image_alt = 'Mulher em equilíbrio emocional praticando mindfulness'
WHERE slug = 'desenvolvendo-equilibrio-emocional';

-- Artigo 7: Por que tanta gente está ansiosa
UPDATE blog_posts
SET
  cover_image = 'https://images.unsplash.com/photo-1573495627361-d9b87960b12d?w=1200&h=630&fit=crop',
  cover_image_alt = 'Pessoa lidando com ansiedade moderna de forma consciente'
WHERE slug = 'por-que-tanta-gente-ansiosa';

-- Artigo 8: A importância da pausa
UPDATE blog_posts
SET
  cover_image = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=630&fit=crop',
  cover_image_alt = 'Pessoa fazendo pausa consciente em ambiente tranquilo'
WHERE slug = 'importancia-da-pausa-na-vida-diaria';

-- Artigo 9: Regular emoções profissional notado
UPDATE blog_posts
SET
  cover_image = 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=630&fit=crop',
  cover_image_alt = 'Profissional com inteligência emocional em ambiente de trabalho'
WHERE slug = 'regular-emocoes-profissional-notado';

-- Artigo 10: Investir em mudar estilo de vida
UPDATE blog_posts
SET
  cover_image = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=630&fit=crop',
  cover_image_alt = 'Pessoa investindo em estilo de vida saudável e transformador'
WHERE slug = 'investir-mudar-estilo-vida-transforma-futuro';

-- =====================================================
-- PASSO 3: INSERIR ARTIGO #1 - ANSIEDADE
-- =====================================================

INSERT INTO blog_posts (
  title,
  slug,
  excerpt,
  content,
  author,
  author_avatar,
  published_at,
  is_published,
  reading_time,
  category,
  tags,
  cover_image,
  cover_image_alt
) VALUES (
  'A ansiedade não precisa parar você, é possível mudar isso',
  'ansiedade-nao-precisa-parar-voce',
  'Descubra como a ansiedade não precisa ser uma barreira intransponível. Aprenda estratégias científicas e práticas do Método FOCCO para transformar sua relação com a ansiedade.',
  '<h2>A ansiedade se tornou sua prisão? Não precisa ser assim</h2>

<p>Se você sente que a ansiedade está controlando sua vida, impedindo você de tomar decisões, paralisando suas ações e roubando sua paz, saiba que você não está sozinho. Dados da OMS mostram que o Brasil é o país mais ansioso do mundo, com 18,6 milhões de pessoas convivendo com transtornos de ansiedade.</p>

<p>Mas aqui está a boa notícia: <strong>a ansiedade não precisa parar você</strong>. Com as ferramentas certas e uma abordagem consciente, é absolutamente possível transformar sua relação com a ansiedade e recuperar o controle da sua vida.</p>

<h2>Entendendo a ansiedade: uma resposta natural que saiu do controle</h2>

<p>A ansiedade, em sua essência, é uma resposta natural do corpo projetada para nos proteger. Ela existe há milhões de anos e nos ajudou a sobreviver a ameaças reais. O problema é que nosso cérebro primitivo não consegue diferenciar entre um predador real e um email urgente do chefe.</p>

<h3>Como a ansiedade funciona no cérebro</h3>

<p>Quando você se sente ansioso, sua amígdala (o centro de alarme do cérebro) dispara, liberando hormônios do estresse como cortisol e adrenalina. Seu corpo entra em modo "lutar ou fugir", mesmo que a "ameaça" seja apenas uma apresentação importante ou uma conversa difícil.</p>

<p>O ciclo vicioso acontece quando:</p>
<ul>
  <li>Você sente ansiedade</li>
  <li>Tenta controlar ou suprimir o sentimento</li>
  <li>A resistência aumenta a ansiedade</li>
  <li>Você evita situações que causam ansiedade</li>
  <li>A evitação reforça o medo</li>
  <li>A ansiedade cresce ainda mais</li>
</ul>

<h2>Os sinais de que a ansiedade está te parando</h2>

<p>Você pode estar vivendo com ansiedade limitante se:</p>

<ul>
  <li><strong>Procrastina decisões importantes</strong> por medo de fazer a escolha errada</li>
  <li><strong>Evita situações sociais ou profissionais</strong> que poderiam ser benéficas</li>
  <li><strong>Revive conversas e situações</strong> repetidamente na sua mente</li>
  <li><strong>Sente sintomas físicos</strong> como taquicardia, tensão muscular ou problemas digestivos</li>
  <li><strong>Tem dificuldade para dormir</strong> com pensamentos acelerados</li>
  <li><strong>Se sente exausto mentalmente</strong> mesmo sem esforço físico</li>
  <li><strong>Evita sair da zona de conforto</strong> por medo do que pode acontecer</li>
</ul>

<p>Se você se identificou com 3 ou mais desses sinais, sua ansiedade está limitando seu potencial. Mas a transformação é possível.</p>

<h2>5 estratégias comprovadas para transformar sua relação com a ansiedade</h2>

<h3>1. Pratique a aceitação radical, não a resistência</h3>

<p>O paradoxo da ansiedade é que quanto mais você tenta não sentir, mais intensa ela fica. A pesquisa em Terapia de Aceitação e Compromisso (ACT) mostra que aceitar a presença da ansiedade, em vez de lutar contra ela, reduz significativamente seu impacto.</p>

<p><strong>Prática:</strong> Quando sentir ansiedade surgindo, diga mentalmente: "Olá, ansiedade. Sei que você está aqui tentando me proteger. Vou sentir você, mas não vou deixar você dirigir minha vida."</p>

<h3>2. Ancoragem no presente através da respiração consciente</h3>

<p>A ansiedade vive no futuro - em cenários que ainda não aconteceram e podem nunca acontecer. A respiração consciente é sua ferramenta mais poderosa para voltar ao momento presente.</p>

<p><strong>Técnica 4-7-8:</strong></p>
<ul>
  <li>Inspire pelo nariz contando até 4</li>
  <li>Segure a respiração por 7 segundos</li>
  <li>Expire pela boca contando até 8</li>
  <li>Repita 4 vezes</li>
</ul>

<p>Esta técnica ativa o sistema nervoso parassimpático, sinalizando ao seu corpo que está seguro.</p>

<h3>3. Questione seus pensamentos ansiosos</h3>

<p>A ansiedade é alimentada por pensamentos catastróficos. A Terapia Cognitivo-Comportamental (TCC) ensina a questionar esses pensamentos automáticos.</p>

<p><strong>Faça estas perguntas:</strong></p>
<ul>
  <li>Este pensamento é baseado em fatos ou em suposições?</li>
  <li>Qual é a evidência real de que isso vai acontecer?</li>
  <li>Já pensei isso antes e o que realmente aconteceu?</li>
  <li>O que eu diria a um amigo que tivesse esse pensamento?</li>
  <li>Qual é a pior coisa que pode acontecer? E se acontecer, eu conseguirei lidar?</li>
</ul>

<h3>4. Exponha-se gradualmente ao que você teme</h3>

<p>A evitação mantém a ansiedade viva. A exposição gradual, um princípio da terapia comportamental, ajuda seu cérebro a reaprender que você está seguro.</p>

<p><strong>Como fazer:</strong></p>
<ul>
  <li>Liste as situações que você evita por ansiedade (de 1-10 em intensidade)</li>
  <li>Comece pela situação nível 3 ou 4 (não muito fácil, não muito difícil)</li>
  <li>Planeje se expor a ela de forma controlada</li>
  <li>Permaneça na situação até a ansiedade diminuir naturalmente</li>
  <li>Celebre cada pequena vitória</li>
  <li>Avance gradualmente para níveis mais desafiadores</li>
</ul>

<h3>5. Cultive uma rotina de autocuidado não negociável</h3>

<p>A ansiedade prospera em um corpo e mente esgotados. Criar uma rotina sólida de autocuidado é criar um sistema de suporte interno.</p>

<p><strong>Pilares essenciais:</strong></p>
<ul>
  <li><strong>Sono de qualidade:</strong> 7-9 horas, horários regulares</li>
  <li><strong>Movimento diário:</strong> 30 minutos de exercício moderado</li>
  <li><strong>Alimentação equilibrada:</strong> Reduzir cafeína e açúcar, aumentar ômega-3</li>
  <li><strong>Conexão social:</strong> Tempo de qualidade com pessoas que te apoiam</li>
  <li><strong>Pausas intencionais:</strong> Momentos de não fazer nada ao longo do dia</li>
</ul>

<h2>Como o Método FOCCO transforma sua relação com a ansiedade</h2>

<p>O Método FOCCO foi desenvolvido especificamente para profissionais que, como você, precisam ter alta performance sem sacrificar a saúde mental. Baseado em mindfulness, neurociência e coaching integrativo, o método trabalha cinco pilares:</p>

<ul>
  <li><strong>F - Foco no presente:</strong> Técnicas para ancorar sua atenção no agora</li>
  <li><strong>O - Observação sem julgamento:</strong> Desenvolver uma relação mais compassiva com seus pensamentos e emoções</li>
  <li><strong>C - Consciência corporal:</strong> Reconhecer sinais de ansiedade antes que ela se intensifique</li>
  <li><strong>C - Clareza de propósito:</strong> Conectar suas ações com o que realmente importa</li>
  <li><strong>O - Organização mental:</strong> Estruturar seus pensamentos para reduzir a sobrecarga cognitiva</li>
</ul>

<p>Através do Método FOCCO, você não elimina a ansiedade (ela faz parte da experiência humana), mas aprende a:</p>
<ul>
  <li>Reconhecer os primeiros sinais de ansiedade</li>
  <li>Usar ferramentas específicas para regular sua resposta</li>
  <li>Tomar ação alinhada, mesmo na presença de ansiedade</li>
  <li>Construir resiliência emocional sustentável</li>
</ul>

<h2>Começando hoje: seu plano de ação de 7 dias</h2>

<p>Transformação não precisa ser complexa. Aqui está um plano simples para a próxima semana:</p>

<h3>Dias 1-2: Consciência</h3>
<ul>
  <li>Observe quando e onde a ansiedade aparece</li>
  <li>Anote os gatilhos sem julgamento</li>
  <li>Pratique a técnica 4-7-8 sempre que notar ansiedade</li>
</ul>

<h3>Dias 3-4: Questionamento</h3>
<ul>
  <li>Escolha um pensamento ansioso recorrente</li>
  <li>Use as 5 perguntas de questionamento</li>
  <li>Escreva respostas baseadas em evidências, não em emoções</li>
</ul>

<h3>Dias 5-6: Exposição</h3>
<ul>
  <li>Identifique uma situação nível 3 que você tem evitado</li>
  <li>Planeje se expor a ela de forma segura</li>
  <li>Execute, permaneça presente, observe a ansiedade diminuir</li>
</ul>

<h3>Dia 7: Integração</h3>
<ul>
  <li>Revise o que funcionou</li>
  <li>Celebre suas vitórias (mesmo as pequenas)</li>
  <li>Planeje a continuidade para a próxima semana</li>
</ul>

<h2>Quando buscar ajuda profissional</h2>

<p>É importante reconhecer quando a ansiedade requer suporte profissional especializado. Procure ajuda se:</p>

<ul>
  <li>A ansiedade interfere significativamente em sua vida diária</li>
  <li>Você tem ataques de pânico frequentes</li>
  <li>Evita situações essenciais (trabalho, relacionamentos)</li>
  <li>Tem pensamentos de auto-lesão</li>
  <li>As estratégias de autocuidado não estão sendo suficientes</li>
</ul>

<p>Um psicólogo ou psiquiatra pode trabalhar em conjunto com abordagens como o Método FOCCO para criar um plano integrado de cuidado.</p>

<h2>Sua jornada começa agora</h2>

<p>A ansiedade não precisa parar você. Ela pode se tornar uma professora poderosa, te mostrando o que precisa de atenção em sua vida. Com as ferramentas certas, autocuidado consistente e uma abordagem compassiva, você pode transformar sua relação com a ansiedade.</p>

<p>O Método FOCCO oferece um caminho estruturado para essa transformação, especialmente desenvolvido para profissionais que buscam alta performance com saúde mental. Não é sobre eliminar a ansiedade, mas sobre aprender a viver uma vida plena mesmo na presença dela.</p>

<p>Você merece viver sem que a ansiedade dirija sua vida. E sim, é possível mudar isso.</p>

<p><strong>Pronto para dar o próximo passo?</strong> Conheça o Método FOCCO e descubra como transformar ansiedade em consciência, medo em ação alinhada, e sobrecarga em clareza mental. <a href="/contato">Agende uma conversa gratuita</a> e comece sua jornada de transformação hoje.</p>',
  'Valéria Dias',
  '/assets/valeria-foto-optimized.png',
  NOW() - INTERVAL '1 day',
  true,
  10,
  'Saúde Mental',
  ARRAY['ansiedade', 'saúde mental', 'método focco', 'mindfulness', 'bem-estar', 'autocuidado'],
  'https://images.unsplash.com/photo-1499364615650-ec38552f4f34?w=1200&h=630&fit=crop',
  'Mulher em estado de calma praticando mindfulness para superar ansiedade'
);

-- =====================================================
-- PASSO 4: INSERIR ARTIGO #2 - PERFECCIONISMO
-- =====================================================

INSERT INTO blog_posts (
  title,
  slug,
  excerpt,
  content,
  author,
  author_avatar,
  published_at,
  is_published,
  reading_time,
  category,
  tags,
  cover_image,
  cover_image_alt
) VALUES (
  'Perfeccionismo adoece: como buscar excelência sem se perder',
  'perfeccionismo-adoece',
  'O perfeccionismo é celebrado pela sociedade, mas pode se tornar uma armadilha perigosa para sua saúde mental. Descubra a diferença entre excelência saudável e perfeccionismo destrutivo.',
  '<h2>A armadilha disfarçada de virtude</h2>

<p>Vivemos em uma cultura que celebra o perfeccionismo. "Eu sou perfeccionista" é muitas vezes dito com orgulho em entrevistas de emprego, perfis profissionais e conversas casuais. Mas por trás dessa máscara de competência e dedicação, esconde-se uma das causas mais comuns de burnout, ansiedade e depressão.</p>

<p>A verdade incômoda é: <strong>perfeccionismo adoece</strong>. E não estou falando de buscar excelência ou ter padrões altos - estou falando do tipo de perfeccionismo que nunca está satisfeito, que paralisa com medo do erro, e que transforma cada tarefa em uma prova de valor pessoal.</p>

<h2>Perfeccionismo vs. Excelência: entendendo a diferença crucial</h2>

<p>Antes de continuar, é fundamental distinguir dois conceitos que frequentemente se confundem:</p>

<h3>Busca por excelência (saudável):</h3>
<ul>
  <li>Focada no processo e no crescimento</li>
  <li>Celebra o progresso, não apenas o resultado perfeito</li>
  <li>Aprende com erros sem se definir por eles</li>
  <li>Estabelece padrões desafiadores mas alcançáveis</li>
  <li>Reconhece quando "bom o suficiente" é realmente suficiente</li>
  <li>Motivada por valores e propósito</li>
</ul>

<h3>Perfeccionismo (destrutivo):</h3>
<ul>
  <li>Focado apenas no resultado final impecável</li>
  <li>Nunca está satisfeito, sempre encontra defeitos</li>
  <li>Vê erros como evidência de inadequação pessoal</li>
  <li>Estabelece padrões impossíveis de alcançar</li>
  <li>Não consegue entregar nada sem que esteja "perfeito"</li>
  <li>Motivado por medo de julgamento e rejeição</li>
</ul>

<p>A pesquisadora Brené Brown resume perfeitamente: "O perfeccionismo é um escudo de 20 toneladas que carregamos achando que nos protege, quando na verdade é a coisa que nos impede de voar."</p>

<h2>Como o perfeccionismo adoece: os impactos reais na saúde</h2>

<p>Estudos científicos têm demonstrado consistentemente os efeitos nocivos do perfeccionismo na saúde física e mental:</p>

<h3>Saúde Mental:</h3>
<ul>
  <li><strong>Ansiedade crônica:</strong> O medo constante de cometer erros mantém o sistema nervoso em estado de alerta</li>
  <li><strong>Depressão:</strong> A impossibilidade de atingir padrões irreais leva a sentimentos de fracasso e inadequação</li>
  <li><strong>Burnout:</strong> A exigência implacável esgota recursos emocionais e mentais</li>
  <li><strong>Baixa autoestima:</strong> Autoavaliação baseada em performance impossível corrói a autoimagem</li>
  <li><strong>Procrastinação paralisante:</strong> O medo de não fazer perfeitamente impede de começar</li>
</ul>

<h3>Saúde Física:</h3>
<ul>
  <li><strong>Insônia:</strong> Rumunação sobre erros e preocupação com performance futura</li>
  <li><strong>Problemas digestivos:</strong> Estresse crônico afeta o sistema gastrointestinal</li>
  <li><strong>Tensão muscular crônica:</strong> Corpo constantemente tenso e em guarda</li>
  <li><strong>Sistema imunológico comprometido:</strong> Estresse prolongado reduz defesas do corpo</li>
  <li><strong>Risco cardiovascular aumentado:</strong> Níveis persistentes de cortisol afetam o coração</li>
</ul>

<h3>Vida Profissional e Pessoal:</h3>
<ul>
  <li><strong>Procrastinação e prazos perdidos:</strong> Paradoxalmente, o perfeccionismo leva à inação</li>
  <li><strong>Relacionamentos prejudicados:</strong> Exigência excessiva com outros e dificuldade de receber críticas</li>
  <li><strong>Oportunidades perdidas:</strong> Medo de não ser perfeito impede de tentar coisas novas</li>
  <li><strong>Criatividade bloqueada:</strong> Medo de errar sufoca a experimentação necessária para inovar</li>
</ul>

<h2>As raízes do perfeccionismo: de onde vem essa exigência?</h2>

<p>Entender a origem do perfeccionismo é o primeiro passo para transformá-lo. Geralmente, ele se desenvolve por:</p>

<h3>1. Condicionamento na infância</h3>
<p>Crianças que receberam amor e aprovação condicionais ("Só te amo quando você é bem-sucedido") aprendem que seu valor depende de performance impecável.</p>

<h3>2. Cultura de comparação constante</h3>
<p>Redes sociais intensificaram a comparação com versões editadas e filtradas da vida dos outros, criando padrões irreais de sucesso e felicidade.</p>

<h3>3. Medo profundo de vergonha e rejeição</h3>
<p>O perfeccionismo se torna uma armadura contra a vulnerabilidade. "Se eu for perfeito, não posso ser criticado, rejeitado ou envergonhado."</p>

<h3>4. Ambiente profissional de alta pressão</h3>
<p>Culturas corporativas que só reconhecem excelência extrema e punem qualquer erro reforçam tendências perfeccionistas.</p>

<h2>Os 7 sinais de que seu perfeccionismo está te adoecendo</h2>

<p>Você pode estar sofrendo com perfeccionismo destrutivo se:</p>

<ol>
  <li><strong>Procrastina tarefas importantes</strong> por medo de não fazer perfeitamente</li>
  <li><strong>Revisa e refaz o mesmo trabalho</strong> incontáveis vezes, nunca satisfeito</li>
  <li><strong>Tem dificuldade de delegar</strong> porque "ninguém fará tão bem quanto você"</li>
  <li><strong>Se critica duramente</strong> por pequenos erros enquanto minimiza grandes sucessos</li>
  <li><strong>Sente que nunca é suficiente</strong>, não importa quanto realize</li>
  <li><strong>Evita novos desafios</strong> por medo de não se destacar imediatamente</li>
  <li><strong>Fica fisicamente tenso</strong> pensando em projetos ou apresentações futuras</li>
</ol>

<p>Se você se identificou com 4 ou mais desses sinais, seu perfeccionismo pode estar prejudicando sua saúde e felicidade.</p>

<h2>Transformando perfeccionismo em excelência saudável: 6 estratégias práticas</h2>

<h3>1. Pratique a autocompaixão, não a autocrítica</h3>

<p>A pesquisa de Kristin Neff mostra que autocompaixão (tratar-se com a mesma gentileza que trataria um amigo) é muito mais eficaz para motivação e crescimento do que autocrítica severa.</p>

<p><strong>Prática:</strong> Quando notar autocrítica, pause e pergunte: "O que eu diria a um amigo querido nesta situação?" Depois, ofereça essa mesma gentileza a si mesmo.</p>

<h3>2. Redefina o que é "sucesso"</h3>

<p>Perfeccionistas definem sucesso como "zero erros". Isso é impossível e insustentável. Redefina sucesso como:</p>
<ul>
  <li>"Dei o meu melhor com os recursos que tinha"</li>
  <li>"Aprendi algo valioso, mesmo que não saiu como planejado"</li>
  <li>"Tive coragem de tentar algo desafiador"</li>
  <li>"Completei a tarefa no prazo de forma funcional"</li>
</ul>

<h3>3. Estabeleça o conceito de "bom o suficiente"</h3>

<p>Nem tudo na vida merece 100% de esforço. Aprenda a calibrar seu investimento de energia baseado na importância real da tarefa.</p>

<p><strong>Exercício:</strong> Para cada tarefa, defina antecipadamente: "Bom o suficiente para esta tarefa significa [critérios específicos]." Quando atingir esses critérios, PARE.</p>

<h3>4. Exponha-se intencionalmente a "imperfeições"</h3>

<p>Seu cérebro precisa reaprender que erros não são catastróficos. Pratique fazer coisas "imperfeitamente" de propósito:</p>
<ul>
  <li>Envie um email sem revisar 5 vezes</li>
  <li>Compartilhe um trabalho 80% pronto (quando o contexto permite)</li>
  <li>Deixe uma tarefa menor inacabada</li>
  <li>Cometa um pequeno erro social deliberadamente</li>
</ul>

<p>Observe que o mundo não desmorona. Você está reprogramando sua resposta ao medo.</p>

<h3>5. Separe sua identidade de suas realizações</h3>

<p>Você não é seu trabalho. Você não é sua produtividade. Você não é seus sucessos ou fracassos. Você é um ser humano inerentemente valioso, independente de performance.</p>

<p><strong>Afirmação diária:</strong> "Meu valor não depende do que eu produzo. Sou digno de amor e pertencimento exatamente como sou."</p>

<h3>6. Cultive hobbies onde você é "ruim"</h3>

<p>Faça algo regularmente que você não faz bem - e não tem intenção de dominar. Jardinagem, pintura, dançar, cozinhar uma receita nova. A prática de fazer algo pelo puro prazer, sem pressão por excelência, é terapêutica para perfeccionistas.</p>

<h2>O Método FOCCO e a transformação do perfeccionismo</h2>

<p>O Método FOCCO oferece um caminho estruturado para transformar perfeccionismo destrutivo em busca saudável por excelência. Através de seus cinco pilares, você aprende:</p>

<ul>
  <li><strong>F - Foco no presente:</strong> Em vez de ruminar sobre erros passados ou temer imperfeições futuras, ancorar-se no que pode fazer agora</li>
  <li><strong>O - Observação sem julgamento:</strong> Desenvolver uma relação mais compassiva com suas imperfeições e "falhas"</li>
  <li><strong>C - Consciência corporal:</strong> Reconhecer sinais físicos de autocrítica excessiva e tensão perfeccionista</li>
  <li><strong>C - Clareza de propósito:</strong> Conectar suas ações com valores profundos, não com medo de julgamento</li>
  <li><strong>O - Organização mental:</strong> Estabelecer critérios realistas de "bom o suficiente" para diferentes contextos</li>
</ul>

<p>O Método FOCCO não te ensina a ser medíocre ou desistir de padrões altos. Te ensina a buscar excelência de forma sustentável, sem sacrificar sua saúde mental e bem-estar no processo.</p>

<h2>Seu plano de ação: 14 dias para liberdade do perfeccionismo</h2>

<h3>Semana 1: Consciência e Aceitação</h3>

<p><strong>Dias 1-3:</strong> Observe e anote todas as vezes que seu perfeccionismo aparece. Não tente mudar ainda, apenas note.</p>

<p><strong>Dias 4-7:</strong> Para cada tarefa, defina antecipadamente "critérios de bom o suficiente". Quando atingir, pare deliberadamente, mesmo que queira continuar ajustando.</p>

<h3>Semana 2: Ação e Experimentação</h3>

<p><strong>Dias 8-10:</strong> Escolha UMA coisa para fazer "imperfeitamente" de propósito cada dia. Observe sua reação emocional e o resultado real.</p>

<p><strong>Dias 11-14:</strong> Pratique autocompaixão ativa. Cada vez que se criticar, pause e reformule com gentileza.</p>

<h2>Quando buscar ajuda profissional</h2>

<p>Procure um terapeuta especializado se:</p>
<ul>
  <li>O perfeccionismo está causando sofrimento significativo</li>
  <li>Interfere em sua capacidade de funcionar no trabalho ou relacionamentos</li>
  <li>Está associado a sintomas de ansiedade ou depressão severos</li>
  <li>As estratégias de autocuidado não são suficientes</li>
</ul>

<p>A Terapia Cognitivo-Comportamental (TCC) e a Terapia de Aceitação e Compromisso (ACT) têm excelentes resultados no tratamento de perfeccionismo.</p>

<h2>Liberdade para ser humano</h2>

<p>Perfeccionismo é, em sua essência, uma recusa em aceitar nossa humanidade. É a crença de que precisamos ser mais do que humanos para sermos amados, aceitos e valorizados. Mas isso é uma ilusão cruel que rouba sua paz, saúde e alegria.</p>

<p>A verdade libertadora é: você já é suficiente. Suas imperfeições não diminuem seu valor. Seus erros não definem quem você é. E você merece buscar excelência em um ritmo que honra sua saúde e bem-estar.</p>

<p>O Método FOCCO te convida a essa jornada de autodescoberta e transformação - um caminho onde alta performance e autocuidado caminham juntos, onde excelência e compaixão se encontram.</p>

<p><strong>Pronto para transformar seu perfeccionismo?</strong> Descubra como o Método FOCCO pode te ajudar a buscar excelência sem se perder no processo. <a href="/contato">Agende uma sessão exploratória gratuita</a> e dê o primeiro passo rumo à liberdade de ser plenamente humano.</p>',
  'Valéria Dias',
  '/assets/valeria-foto-optimized.png',
  NOW() - INTERVAL '12 hours',
  true,
  9,
  'Desenvolvimento Pessoal',
  ARRAY['perfeccionismo', 'saúde mental', 'desenvolvimento pessoal', 'autocuidado', 'método focco', 'autocompaixão'],
  'https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=1200&h=630&fit=crop',
  'Profissional encontrando equilíbrio entre perfeccionismo e bem-estar'
);

-- =====================================================
-- VERIFICAÇÃO FINAL
-- =====================================================

-- Contar total de artigos publicados
SELECT COUNT(*) as total_artigos FROM blog_posts WHERE is_published = true;

-- Verificar artigos com imagens
SELECT COUNT(*) as artigos_com_imagem FROM blog_posts WHERE cover_image IS NOT NULL;

-- Listar todos os artigos publicados
SELECT
  title,
  slug,
  category,
  reading_time,
  CASE WHEN cover_image IS NOT NULL THEN 'SIM' ELSE 'NÃO' END as tem_imagem
FROM blog_posts
WHERE is_published = true
ORDER BY published_at DESC;
