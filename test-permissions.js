import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vtsqvmmhgekwdwihyaax.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0c3F2bW1oZ2Vrd2R3aWh5YWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExNjkzMzQsImV4cCI6MjA3Njc0NTMzNH0.r-9HdIIiga2DHQoBqSI1FE5__o5jrjFvg1nLAGGjwog';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testPermissions() {
  console.log('=== TESTANDO PERMISSÕES ===\n');

  try {
    // 1. Buscar um post específico
    console.log('1. Buscando um post específico...');
    const { data: posts, error: fetchError } = await supabase
      .from('blog_posts')
      .select('id, title, content')
      .limit(1);

    if (fetchError) {
      throw new Error(`Erro ao buscar post: ${fetchError.message}`);
    }

    if (posts.length === 0) {
      throw new Error('Nenhum post encontrado');
    }

    const testPost = posts[0];
    console.log(`   Post selecionado: ${testPost.title}`);
    console.log(`   ID: ${testPost.id}`);
    console.log(`   Tamanho do conteúdo: ${testPost.content.length} caracteres\n`);

    // 2. Tentar atualizar o post com uma marca específica
    console.log('2. Tentando atualizar o post...');
    const timestamp = new Date().toISOString();
    const updatedContent = `<!-- TEST UPDATE ${timestamp} -->\n${testPost.content}`;

    const { data: updateData, error: updateError } = await supabase
      .from('blog_posts')
      .update({ content: updatedContent })
      .eq('id', testPost.id)
      .select();

    if (updateError) {
      console.error(`   ❌ ERRO ao atualizar: ${updateError.message}`);
      console.error(`   Detalhes:`, updateError);
      return;
    }

    console.log(`   ✓ Update executado`);
    console.log(`   Dados retornados:`, updateData ? `${updateData.length} registro(s)` : 'null');

    // 3. Buscar novamente para verificar
    console.log('\n3. Buscando novamente para verificar...');
    const { data: verifyData, error: verifyError } = await supabase
      .from('blog_posts')
      .select('id, title, content')
      .eq('id', testPost.id);

    if (verifyError) {
      throw new Error(`Erro ao verificar: ${verifyError.message}`);
    }

    if (verifyData.length === 0) {
      throw new Error('Post não encontrado na verificação');
    }

    const verifiedPost = verifyData[0];
    const wasUpdated = verifiedPost.content.includes(`TEST UPDATE ${timestamp}`);

    console.log(`   Post encontrado: ${verifiedPost.title}`);
    console.log(`   Atualização aplicada: ${wasUpdated ? '✓ SIM' : '✗ NÃO'}`);

    if (wasUpdated) {
      console.log('\n✓✓✓ PERMISSÕES OK - Atualizações estão funcionando!');

      // Reverter a mudança de teste
      console.log('\n4. Revertendo mudança de teste...');
      const { error: revertError } = await supabase
        .from('blog_posts')
        .update({ content: testPost.content })
        .eq('id', testPost.id);

      if (revertError) {
        console.error(`   ❌ Erro ao reverter: ${revertError.message}`);
      } else {
        console.log(`   ✓ Mudança de teste revertida`);
      }
    } else {
      console.log('\n❌❌❌ PROBLEMA DETECTADO - Atualizações não estão sendo persistidas!');
      console.log('\nPossíveis causas:');
      console.log('- RLS (Row Level Security) bloqueando updates com a chave anon');
      console.log('- Falta de permissões na role anon');
      console.log('- Triggers ou políticas no banco bloqueando a operação');
    }

  } catch (error) {
    console.error('\n❌ ERRO:', error.message);
    console.error(error);
  }
}

testPermissions();
