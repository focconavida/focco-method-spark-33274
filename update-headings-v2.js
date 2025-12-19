import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vtsqvmmhgekwdwihyaax.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0c3F2bW1oZ2Vrd2R3aWh5YWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExNjkzMzQsImV4cCI6MjA3Njc0NTMzNH0.r-9HdIIiga2DHQoBqSI1FE5__o5jrjFvg1nLAGGjwog';

const supabase = createClient(supabaseUrl, supabaseKey);

async function updateHeadings() {
  console.log('=== INICIANDO ATUALIZAÇÃO DE HEADINGS (V2) ===\n');

  try {
    // 1. Buscar todos os posts com H2 ou H3
    console.log('1. Buscando posts com tags H2 ou H3...');
    const { data: posts, error: fetchError } = await supabase
      .from('blog_posts')
      .select('id, title, content, is_published')
      .or('content.like.%<h2>%,content.like.%<h2 %,content.like.%<h3>%,content.like.%<h3 %');

    if (fetchError) {
      throw new Error(`Erro ao buscar posts: ${fetchError.message}`);
    }

    console.log(`   Encontrados ${posts.length} posts para processar\n`);

    // 2. Atualizar posts individualmente
    let h2Count = 0;
    let h3Count = 0;
    let errorCount = 0;
    const errors = [];

    console.log('2. Processando atualizações...\n');

    for (const post of posts) {
      let updatedContent = post.content;
      let wasUpdated = false;

      // Atualizar H2
      const originalContent = updatedContent;

      // Primeira substituição: <h2> simples (sem atributos)
      if (updatedContent.includes('<h2>')) {
        updatedContent = updatedContent.replaceAll(
          '<h2>',
          '<h2 class="text-lg font-bold text-gray-900 mt-10 mb-5 leading-snug">'
        );
        h2Count++;
        wasUpdated = true;
      }

      // Segunda substituição: <h2 com class existente (mas sem nossas classes)
      const h2WithClassRegex = /<h2\s+class="(?!text-lg)([^"]*)"/g;
      if (h2WithClassRegex.test(updatedContent)) {
        updatedContent = updatedContent.replace(
          /<h2\s+class="(?!text-lg)([^"]*)"/g,
          '<h2 class="text-lg font-bold text-gray-900 mt-10 mb-5 leading-snug $1"'
        );
        if (!wasUpdated && originalContent !== updatedContent) {
          h2Count++;
          wasUpdated = true;
        }
      }

      // Terceira substituição: <h2 com style (adicionar class antes do style)
      const h2WithStyleRegex = /<h2\s+style="/g;
      if (h2WithStyleRegex.test(updatedContent)) {
        updatedContent = updatedContent.replace(
          /<h2\s+style="/g,
          '<h2 class="text-lg font-bold text-gray-900 mt-10 mb-5 leading-snug" style="'
        );
        if (!wasUpdated && originalContent !== updatedContent) {
          h2Count++;
          wasUpdated = true;
        }
      }

      // Atualizar H3
      const beforeH3 = updatedContent;

      // Primeira substituição: <h3> simples (sem atributos)
      if (updatedContent.includes('<h3>')) {
        updatedContent = updatedContent.replaceAll(
          '<h3>',
          '<h3 class="text-base font-bold text-gray-900 mt-8 mb-4 leading-normal">'
        );
        h3Count++;
        wasUpdated = true;
      }

      // Segunda substituição: <h3 com class existente (mas sem nossas classes)
      const h3WithClassRegex = /<h3\s+class="(?!text-base)([^"]*)"/g;
      if (h3WithClassRegex.test(updatedContent)) {
        updatedContent = updatedContent.replace(
          /<h3\s+class="(?!text-base)([^"]*)"/g,
          '<h3 class="text-base font-bold text-gray-900 mt-8 mb-4 leading-normal $1"'
        );
        if (beforeH3 !== updatedContent && !wasUpdated) {
          h3Count++;
          wasUpdated = true;
        }
      }

      // Terceira substituição: <h3 com style (adicionar class antes do style)
      const h3WithStyleRegex = /<h3\s+style="/g;
      if (h3WithStyleRegex.test(updatedContent)) {
        updatedContent = updatedContent.replace(
          /<h3\s+style="/g,
          '<h3 class="text-base font-bold text-gray-900 mt-8 mb-4 leading-normal" style="'
        );
        if (beforeH3 !== updatedContent && !wasUpdated) {
          h3Count++;
          wasUpdated = true;
        }
      }

      // Salvar se houve mudanças
      if (updatedContent !== post.content) {
        console.log(`   Atualizando: ${post.title.substring(0, 50)}...`);

        const { error: updateError } = await supabase
          .from('blog_posts')
          .update({ content: updatedContent })
          .eq('id', post.id);

        if (updateError) {
          errorCount++;
          errors.push({ title: post.title, error: updateError.message });
          console.error(`   ❌ ERRO: ${updateError.message}`);
        } else {
          console.log(`   ✓ Atualizado`);
        }
      }
    }

    console.log('\n=== RESULTADOS ===\n');
    console.log(`Posts processados: ${posts.length}`);
    console.log(`Posts com H2 atualizado: ${h2Count}`);
    console.log(`Posts com H3 atualizado: ${h3Count}`);
    console.log(`Erros: ${errorCount}\n`);

    if (errors.length > 0) {
      console.log('=== ERROS DETALHADOS ===\n');
      errors.forEach(err => {
        console.log(`- ${err.title}: ${err.error}`);
      });
    }

    // 3. Verificar resultados
    console.log('\n3. Verificando resultados...\n');
    const { data: verifyData, error: verifyError } = await supabase
      .from('blog_posts')
      .select('title, content, published_at, is_published')
      .eq('is_published', true)
      .order('published_at', { ascending: false })
      .limit(10);

    if (verifyError) {
      throw new Error(`Erro ao verificar posts: ${verifyError.message}`);
    }

    console.log('=== STATUS DOS ÚLTIMOS 10 POSTS PUBLICADOS ===\n');
    console.log('TÍTULO                                    | STATUS H2         | STATUS H3');
    console.log('-'.repeat(85));

    verifyData.forEach(post => {
      const hasH2 = post.content.includes('<h2');
      const h2Updated = post.content.includes('<h2 class="text-lg');
      const hasH3 = post.content.includes('<h3');
      const h3Updated = post.content.includes('<h3 class="text-base');

      let h2Status = '';
      if (!hasH2) {
        h2Status = 'Sem H2';
      } else if (h2Updated) {
        h2Status = 'H2 Atualizado ✓';
      } else {
        h2Status = 'H2 Pendente ✗';
      }

      let h3Status = '';
      if (!hasH3) {
        h3Status = 'Sem H3';
      } else if (h3Updated) {
        h3Status = 'H3 Atualizado ✓';
      } else {
        h3Status = 'H3 Pendente ✗';
      }

      console.log(`${post.title.substring(0, 41).padEnd(42)} | ${h2Status.padEnd(17)} | ${h3Status}`);
    });

    console.log('\n=== RESUMO FINAL ===');
    console.log(`Posts com H2 atualizado: ${verifyData.filter(p => p.content.includes('<h2 class="text-lg')).length}/10`);
    console.log(`Posts com H3 atualizado: ${verifyData.filter(p => p.content.includes('<h3 class="text-base')).length}/10`);

  } catch (error) {
    console.error('\n❌ ERRO FATAL:', error.message);
    console.error(error);
    process.exit(1);
  }
}

updateHeadings();
