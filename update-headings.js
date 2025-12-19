import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vtsqvmmhgekwdwihyaax.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0c3F2bW1oZ2Vrd2R3aWh5YWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExNjkzMzQsImV4cCI6MjA3Njc0NTMzNH0.r-9HdIIiga2DHQoBqSI1FE5__o5jrjFvg1nLAGGjwog';

const supabase = createClient(supabaseUrl, supabaseKey);

async function executeUpdates() {
  console.log('=== INICIANDO ATUALIZAÇÃO DE TAGS H2 E H3 ===\n');

  try {
    // UPDATE 1: Atualizar H2
    console.log('1. Executando UPDATE para tags H2...');
    const { data: h2Data, error: h2Error, count: h2Count } = await supabase.rpc('exec_sql', {
      sql: `
        UPDATE blog_posts
        SET content = REPLACE(
          REPLACE(
            REPLACE(content, '<h2>', '<h2 class="text-lg font-bold text-gray-900 mt-10 mb-5 leading-snug">'),
            '<h2 class="', '<h2 class="text-lg font-bold text-gray-900 mt-10 mb-5 leading-snug '
          ),
          '<h2 style="', '<h2 class="text-lg font-bold text-gray-900 mt-10 mb-5 leading-snug" style="'
        )
        WHERE content LIKE '%<h2>%' OR content LIKE '%<h2 %'
      `
    });

    if (h2Error) {
      console.error('Erro no UPDATE H2:', h2Error);
      console.log('\nTentando abordagem alternativa...\n');

      // Abordagem alternativa: buscar posts e atualizar individualmente
      const { data: posts, error: fetchError } = await supabase
        .from('blog_posts')
        .select('id, title, content')
        .or('content.like.%<h2>%,content.like.%<h2 %');

      if (fetchError) {
        throw new Error(`Erro ao buscar posts: ${fetchError.message}`);
      }

      console.log(`Encontrados ${posts.length} posts com tags H2 para atualizar`);

      let h2Updated = 0;
      for (const post of posts) {
        let updatedContent = post.content;

        // Primeira substituição: <h2> simples
        updatedContent = updatedContent.replace(
          /<h2>/g,
          '<h2 class="text-lg font-bold text-gray-900 mt-10 mb-5 leading-snug">'
        );

        // Segunda substituição: adicionar classes se já existir class
        updatedContent = updatedContent.replace(
          /<h2 class="(?!text-lg)/g,
          '<h2 class="text-lg font-bold text-gray-900 mt-10 mb-5 leading-snug '
        );

        // Terceira substituição: adicionar classes se já existir style
        updatedContent = updatedContent.replace(
          /<h2 style="/g,
          '<h2 class="text-lg font-bold text-gray-900 mt-10 mb-5 leading-snug" style="'
        );

        if (updatedContent !== post.content) {
          const { error: updateError } = await supabase
            .from('blog_posts')
            .update({ content: updatedContent })
            .eq('id', post.id);

          if (updateError) {
            console.error(`Erro ao atualizar post ${post.title}:`, updateError);
          } else {
            h2Updated++;
          }
        }
      }

      console.log(`✓ ${h2Updated} posts atualizados com classes H2\n`);
    } else {
      console.log('✓ UPDATE H2 executado com sucesso\n');
    }

    // UPDATE 2: Atualizar H3
    console.log('2. Executando UPDATE para tags H3...');
    const { data: posts, error: fetchError } = await supabase
      .from('blog_posts')
      .select('id, title, content')
      .or('content.like.%<h3>%,content.like.%<h3 %');

    if (fetchError) {
      throw new Error(`Erro ao buscar posts: ${fetchError.message}`);
    }

    console.log(`Encontrados ${posts.length} posts com tags H3 para atualizar`);

    let h3Updated = 0;
    for (const post of posts) {
      let updatedContent = post.content;

      // Primeira substituição: <h3> simples
      updatedContent = updatedContent.replace(
        /<h3>/g,
        '<h3 class="text-base font-bold text-gray-900 mt-8 mb-4 leading-normal">'
      );

      // Segunda substituição: adicionar classes se já existir class
      updatedContent = updatedContent.replace(
        /<h3 class="(?!text-base)/g,
        '<h3 class="text-base font-bold text-gray-900 mt-8 mb-4 leading-normal '
      );

      // Terceira substituição: adicionar classes se já existir style
      updatedContent = updatedContent.replace(
        /<h3 style="/g,
        '<h3 class="text-base font-bold text-gray-900 mt-8 mb-4 leading-normal" style="'
      );

      if (updatedContent !== post.content) {
        const { error: updateError } = await supabase
          .from('blog_posts')
          .update({ content: updatedContent })
          .eq('id', post.id);

        if (updateError) {
          console.error(`Erro ao atualizar post ${post.title}:`, updateError);
        } else {
          h3Updated++;
        }
      }
    }

    console.log(`✓ ${h3Updated} posts atualizados com classes H3\n`);

    // VERIFICAÇÃO: Query para verificar os resultados
    console.log('3. Verificando resultados...\n');
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
    console.log('TÍTULO | STATUS H2 | STATUS H3');
    console.log('-'.repeat(80));

    verifyData.forEach(post => {
      const h2Status = post.content.includes('<h2 class="text-lg') ? 'H2 Atualizado ✓' : 'H2 Pendente';
      const h3Status = post.content.includes('<h3 class="text-base') ? 'H3 Atualizado ✓' : 'H3 Pendente';
      console.log(`${post.title.substring(0, 40).padEnd(40)} | ${h2Status.padEnd(16)} | ${h3Status}`);
    });

    console.log('\n=== RESUMO FINAL ===');
    console.log(`Posts com H2 atualizado: ${verifyData.filter(p => p.content.includes('<h2 class="text-lg')).length}/10`);
    console.log(`Posts com H3 atualizado: ${verifyData.filter(p => p.content.includes('<h3 class="text-base')).length}/10`);

  } catch (error) {
    console.error('\n❌ ERRO:', error.message);
    process.exit(1);
  }
}

executeUpdates();
