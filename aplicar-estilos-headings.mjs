import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vtsqvmmhgekwdwihyaax.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0c3F2bW1oZ2Vrd2R3aWh5YWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExNjkzMzQsImV4cCI6MjA3Njc0NTMzNH0.r-9HdIIiga2DHQoBqSI1FE5__o5jrjFvg1nLAGGjwog';

const supabase = createClient(supabaseUrl, supabaseKey);

async function aplicarEstilos() {
  console.log('🎨 Aplicando estilos inline nos headings...\n');

  // Buscar todos os posts publicados
  const { data: posts, error: fetchError } = await supabase
    .from('blog_posts')
    .select('id, title, slug, content')
    .eq('is_published', true);

  if (fetchError) {
    console.error('❌ Erro ao buscar posts:', fetchError);
    return;
  }

  console.log(`📄 Encontrados ${posts.length} posts publicados\n`);

  let h2Updated = 0;
  let h3Updated = 0;

  for (const post of posts) {
    let content = post.content;
    let modified = false;

    // PASSO 1: Remover classes antigas dos H2
    if (content.includes('<h2 class="')) {
      content = content.replace(
        /<h2 class="[^"]*">/g,
        '<h2>'
      );
      modified = true;
    }

    // PASSO 2: Adicionar estilos INLINE nos H2 (18px)
    if (content.includes('<h2>') && !content.includes('<h2 style=')) {
      content = content.replace(
        /<h2>/g,
        '<h2 style="font-size: 18px !important; font-weight: 700 !important; color: #111827 !important; margin-top: 2.5rem !important; margin-bottom: 1.25rem !important; line-height: 1.625 !important;">'
      );
      h2Updated++;
      modified = true;
    }

    // PASSO 3: Remover classes antigas dos H3
    if (content.includes('<h3 class="')) {
      content = content.replace(
        /<h3 class="[^"]*">/g,
        '<h3>'
      );
      modified = true;
    }

    // PASSO 4: Adicionar estilos INLINE nos H3 (16px bold)
    if (content.includes('<h3>') && !content.includes('<h3 style=')) {
      content = content.replace(
        /<h3>/g,
        '<h3 style="font-size: 16px !important; font-weight: 700 !important; color: #111827 !important; margin-top: 2rem !important; margin-bottom: 1rem !important; line-height: 1.5 !important;">'
      );
      h3Updated++;
      modified = true;
    }

    // Atualizar se houve modificação
    if (modified) {
      const { error: updateError } = await supabase
        .from('blog_posts')
        .update({ content })
        .eq('id', post.id);

      if (updateError) {
        console.error(`❌ Erro ao atualizar "${post.title}":`, updateError);
      } else {
        console.log(`✅ Atualizado: ${post.title}`);
      }
    }
  }

  console.log('\n📊 RESUMO:');
  console.log(`   Total de posts: ${posts.length}`);
  console.log(`   Posts com H2 estilizados: ${h2Updated}`);
  console.log(`   Posts com H3 estilizados: ${h3Updated}`);

  // Verificar resultado
  console.log('\n🔍 Verificando resultado...');
  const { data: verification } = await supabase
    .from('blog_posts')
    .select('title, content')
    .eq('is_published', true)
    .like('content', '%<h2 style%')
    .limit(1);

  if (verification && verification.length > 0) {
    const match = verification[0].content.match(/<h2 style="[^"]*">/);
    if (match) {
      console.log('\n✅ Exemplo de H2 estilizado:');
      console.log(match[0]);
    }
  }

  console.log('\n🎉 Estilos aplicados com sucesso!');
}

aplicarEstilos();
