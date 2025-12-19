const fs = require('fs');

const SUPABASE_URL = 'https://vtsqvmmhgekwdwihyaax.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0c3F2bW1oZ2Vrd2R3aWh5YWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExNjkzMzQsImV4cCI6MjA3Njc0NTMzNH0.r-9HdIIiga2DHQoBqSI1FE5__o5jrjFvg1nLAGGjwog';

const newContent = fs.readFileSync('../novo-artigo-autoconhecimento.md', 'utf8');

const updatePost = async () => {
  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/blog_posts?slug=eq.importancia-autoconhecimento-jornada-profissional`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({
          content: newContent,
          reading_time: 7,
          updated_at: new Date().toISOString()
        })
      }
    );

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Erro ao atualizar: ${response.status} - ${error}`);
    }

    const data = await response.json();
    console.log('✅ Artigo atualizado com sucesso!');
    console.log('Dados atualizados:', JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('❌ Erro:', error.message);
    process.exit(1);
  }
};

updatePost();
