import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

// Carregar variáveis de ambiente
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://vtsqvmmhgekwdwihyaax.supabase.co';
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!serviceRoleKey) {
  console.error('\n❌ ERRO: SUPABASE_SERVICE_ROLE_KEY não encontrada!');
  console.error('\nPor favor, adicione a service role key ao arquivo .env.local:');
  console.error('SUPABASE_SERVICE_ROLE_KEY=sua-service-role-key-aqui\n');
  console.error('Obtenha a chave em: https://app.supabase.com/project/vtsqvmmhgekwdwihyaax/settings/api\n');
  process.exit(1);
}

// Criar cliente com service role key (bypassa RLS)
const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function updateHeadingsWithServiceKey() {
  console.log('=== ATUALIZAÇÃO DE HEADINGS COM SERVICE ROLE KEY ===\n');
  console.log('Esta chave bypassa o RLS e permite operações administrativas.\n');

  try {
    // 1. Buscar todos os posts com H2 ou H3
    console.log('1. Buscando posts com tags H2 ou H3...');
    const { data: posts, error: fetchError } = await supabase
      .from('blog_posts')
      .select('id, title, content, is_published');

    if (fetchError) {
      throw new Error(`Erro ao buscar posts: ${fetchError.message}`);
    }

    console.log(`   Total de posts: ${posts.length}\n`);

    // Filtrar posts com H2 ou H3
    const postsToUpdate = posts.filter(p =>
      p.content.includes('<h2>') ||
      p.content.includes('<h2 ') ||
      p.content.includes('<h3>') ||
      p.content.includes('<h3 ')
    );

    console.log(`   Posts com H2/H3: ${postsToUpdate.length}\n`);

    // 2. Processar atualizações
    let h2UpdatedCount = 0;
    let h3UpdatedCount = 0;
    let totalUpdated = 0;
    let errorCount = 0;
    const errors = [];

    console.log('2. Processando atualizações...\n');

    for (const post of postsToUpdate) {
      let updatedContent = post.content;
      let wasUpdated = false;
      let updatedH2 = false;
      let updatedH3 = false;

      // ==== ATUALIZAR H2 ====
      const beforeH2 = updatedContent;

      // 1. <h2> simples (sem atributos)
      updatedContent = updatedContent.replaceAll(
        '<h2>',
        '<h2 class="text-lg font-bold text-gray-900 mt-10 mb-5 leading-snug">'
      );

      // 2. <h2 com class existente (adicionar nossas classes no início)
      updatedContent = updatedContent.replace(
        /<h2\s+class="(?!text-lg)([^"]*)"/g,
        '<h2 class="text-lg font-bold text-gray-900 mt-10 mb-5 leading-snug $1"'
      );

      // 3. <h2 com style (adicionar class antes do style)
      updatedContent = updatedContent.replace(
        /<h2\s+style="([^"]*)"/g,
        '<h2 class="text-lg font-bold text-gray-900 mt-10 mb-5 leading-snug" style="$1"'
      );

      if (beforeH2 !== updatedContent) {
        updatedH2 = true;
        wasUpdated = true;
      }

      // ==== ATUALIZAR H3 ====
      const beforeH3 = updatedContent;

      // 1. <h3> simples (sem atributos)
      updatedContent = updatedContent.replaceAll(
        '<h3>',
        '<h3 class="text-base font-bold text-gray-900 mt-8 mb-4 leading-normal">'
      );

      // 2. <h3 com class existente (adicionar nossas classes no início)
      updatedContent = updatedContent.replace(
        /<h3\s+class="(?!text-base)([^"]*)"/g,
        '<h3 class="text-base font-bold text-gray-900 mt-8 mb-4 leading-normal $1"'
      );

      // 3. <h3 com style (adicionar class antes do style)
      updatedContent = updatedContent.replace(
        /<h3\s+style="([^"]*)"/g,
        '<h3 class="text-base font-bold text-gray-900 mt-8 mb-4 leading-normal" style="$1"'
      );

      if (beforeH3 !== updatedContent) {
        updatedH3 = true;
        wasUpdated = true;
      }

      // Salvar se houve mudanças
      if (wasUpdated) {
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
          totalUpdated++;
          if (updatedH2) h2UpdatedCount++;
          if (updatedH3) h3UpdatedCount++;
          console.log(`   ✓ Atualizado (H2: ${updatedH2 ? '✓' : '-'}, H3: ${updatedH3 ? '✓' : '-'})`);
        }

        // Pequeno delay para não sobrecarregar
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }

    console.log('\n=== RESULTADOS ===\n');
    console.log(`Posts processados: ${postsToUpdate.length}`);
    console.log(`Posts atualizados: ${totalUpdated}`);
    console.log(`Posts com H2 atualizado: ${h2UpdatedCount}`);
    console.log(`Posts com H3 atualizado: ${h3UpdatedCount}`);
    console.log(`Erros: ${errorCount}\n`);

    if (errors.length > 0) {
      console.log('=== ERROS DETALHADOS ===\n');
      errors.forEach(err => {
        console.log(`- ${err.title}: ${err.error}`);
      });
      console.log();
    }

    // 3. Verificar resultados
    console.log('3. Verificando resultados...\n');
    const { data: allPostsAfter, error: verifyAllError } = await supabase
      .from('blog_posts')
      .select('content');

    if (verifyAllError) {
      throw new Error(`Erro ao verificar todos os posts: ${verifyAllError.message}`);
    }

    const totalH2Updated = allPostsAfter.filter(p => p.content.includes('<h2 class="text-lg')).length;
    const totalH3Updated = allPostsAfter.filter(p => p.content.includes('<h3 class="text-base')).length;

    console.log('=== VERIFICAÇÃO GERAL ===\n');
    console.log(`Total de posts com H2 atualizado: ${totalH2Updated}/${allPostsAfter.length}`);
    console.log(`Total de posts com H3 atualizado: ${totalH3Updated}/${allPostsAfter.length}\n`);

    // 4. Verificar últimos 10 posts publicados
    const { data: publishedPosts, error: pubError } = await supabase
      .from('blog_posts')
      .select('title, content, published_at')
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

    const pub10H2 = publishedPosts.filter(p => p.content.includes('<h2 class="text-lg')).length;
    const pub10H3 = publishedPosts.filter(p => p.content.includes('<h3 class="text-base')).length;

    console.log('\n=== RESUMO FINAL ===');
    console.log(`Posts publicados com H2 atualizado: ${pub10H2}/10`);
    console.log(`Posts publicados com H3 atualizado: ${pub10H3}/10\n`);

    if (totalUpdated > 0) {
      console.log('✓✓✓ ATUALIZAÇÕES CONCLUÍDAS COM SUCESSO! ✓✓✓\n');
    }

  } catch (error) {
    console.error('\n❌ ERRO FATAL:', error.message);
    console.error(error);
    process.exit(1);
  }
}

updateHeadingsWithServiceKey();
