import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vtsqvmmhgekwdwihyaax.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0c3F2bW1oZ2Vrd2R3aWh5YWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExNjkzMzQsImV4cCI6MjA3Njc0NTMzNH0.r-9HdIIiga2DHQoBqSI1FE5__o5jrjFvg1nLAGGjwog';

const supabase = createClient(supabaseUrl, supabaseKey);

async function verifyUpdates() {
  console.log('=== VERIFICAÇÃO DETALHADA DAS ATUALIZAÇÕES ===\n');

  try {
    // Buscar TODOS os posts
    const { data: allPosts, error: allError } = await supabase
      .from('blog_posts')
      .select('id, title, content, is_published, published_at');

    if (allError) {
      throw new Error(`Erro ao buscar todos os posts: ${allError.message}`);
    }

    console.log(`Total de posts no banco: ${allPosts.length}\n`);

    // Contar posts com H2
    const postsWithH2 = allPosts.filter(p => p.content.includes('<h2'));
    const postsWithH2Updated = allPosts.filter(p => p.content.includes('<h2 class="text-lg'));

    console.log(`Posts com tags H2: ${postsWithH2.length}`);
    console.log(`Posts com H2 atualizado: ${postsWithH2Updated.length}\n`);

    // Contar posts com H3
    const postsWithH3 = allPosts.filter(p => p.content.includes('<h3'));
    const postsWithH3Updated = allPosts.filter(p => p.content.includes('<h3 class="text-base'));

    console.log(`Posts com tags H3: ${postsWithH3.length}`);
    console.log(`Posts com H3 atualizado: ${postsWithH3Updated.length}\n`);

    // Buscar posts publicados
    const { data: publishedPosts, error: pubError } = await supabase
      .from('blog_posts')
      .select('id, title, content, published_at')
      .eq('is_published', true)
      .order('published_at', { ascending: false })
      .limit(10);

    if (pubError) {
      throw new Error(`Erro ao buscar posts publicados: ${pubError.message}`);
    }

    console.log('=== STATUS DOS ÚLTIMOS 10 POSTS PUBLICADOS ===\n');
    console.log('TÍTULO                                    | STATUS H2         | STATUS H3');
    console.log('-'.repeat(85));

    publishedPosts.forEach(post => {
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

    console.log('\n=== POSTS NÃO PUBLICADOS COM TAGS ===\n');
    const unpublishedWithH2 = allPosts.filter(p => !p.is_published && p.content.includes('<h2'));
    const unpublishedWithH3 = allPosts.filter(p => !p.is_published && p.content.includes('<h3'));

    console.log(`Posts não publicados com H2: ${unpublishedWithH2.length}`);
    console.log(`Posts não publicados com H3: ${unpublishedWithH3.length}\n`);

    // Verificar posts específicos que foram atualizados
    console.log('=== SAMPLE DE POSTS ATUALIZADOS ===\n');
    const sampleUpdated = allPosts.filter(p =>
      p.content.includes('<h2 class="text-lg') || p.content.includes('<h3 class="text-base')
    ).slice(0, 5);

    sampleUpdated.forEach(post => {
      console.log(`- ${post.title}`);
      console.log(`  Publicado: ${post.is_published ? 'Sim' : 'Não'}`);
      console.log(`  H2: ${post.content.includes('<h2 class="text-lg') ? '✓' : '✗'}`);
      console.log(`  H3: ${post.content.includes('<h3 class="text-base') ? '✓' : '✗'}\n`);
    });

  } catch (error) {
    console.error('\n❌ ERRO:', error.message);
    process.exit(1);
  }
}

verifyUpdates();
