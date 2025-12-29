import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const supabaseUrl = 'https://vtsqvmmhgekwdwihyaax.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0c3F2bW1oZ2Vrd2R3aWh5YWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExNjkzMzQsImV4cCI6MjA3Njc0NTMzNH0.r-9HdIIiga2DHQoBqSI1FE5__o5jrjFvg1nLAGGjwog';

const supabase = createClient(supabaseUrl, supabaseKey);

const SITE_URL = 'https://focconavida.com.br';

async function gerarSitemap() {
  console.log('🗺️  Gerando sitemap.xml atualizado...\n');

  // Buscar todos os posts publicados
  const { data: posts, error } = await supabase
    .from('blog_posts')
    .select('slug, published_at, updated_at')
    .eq('is_published', true)
    .order('published_at', { ascending: false });

  if (error) {
    console.error('❌ Erro ao buscar posts:', error);
    return;
  }

  console.log(`📄 Encontrados ${posts.length} posts publicados\n`);

  // Páginas estáticas
  const paginasEstaticas = [
    { url: '/', lastmod: '2025-12-29', changefreq: 'weekly', priority: '1.0' },
    { url: '/sobre', lastmod: '2025-12-16', changefreq: 'monthly', priority: '0.8' },
    { url: '/metodo', lastmod: '2025-12-16', changefreq: 'monthly', priority: '0.9' },
    { url: '/servicos', lastmod: '2025-12-16', changefreq: 'monthly', priority: '0.8' },
    { url: '/contato', lastmod: '2025-12-29', changefreq: 'monthly', priority: '0.7' },
    { url: '/blog', lastmod: '2025-12-30', changefreq: 'daily', priority: '0.9' },
  ];

  // Montar XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- =====================================================
       SITEMAP GERADO AUTOMATICAMENTE
       Data: ${new Date().toISOString().split('T')[0]}
       Total de URLs: ${paginasEstaticas.length + posts.length}
  ===================================================== -->

  <!-- Páginas Principais -->
`;

  // Adicionar páginas estáticas
  paginasEstaticas.forEach(pagina => {
    xml += `  <url>
    <loc>${SITE_URL}${pagina.url}</loc>
    <lastmod>${pagina.lastmod}</lastmod>
    <changefreq>${pagina.changefreq}</changefreq>
    <priority>${pagina.priority}</priority>
  </url>
`;
  });

  xml += `
  <!-- =====================================================
       ARTIGOS DO BLOG
       Total: ${posts.length} artigos publicados
  ===================================================== -->

`;

  // Adicionar posts do blog
  posts.forEach((post, index) => {
    const lastmod = post.updated_at
      ? new Date(post.updated_at).toISOString().split('T')[0]
      : new Date(post.published_at).toISOString().split('T')[0];

    // Prioridade maior para posts mais recentes
    const priority = index < 10 ? '0.8' : '0.7';

    xml += `  <url>
    <loc>${SITE_URL}/blog/${post.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>
`;
  });

  xml += `
</urlset>
`;

  // Salvar arquivo
  const caminhoPublic = './public/sitemap.xml';
  const caminhoDist = './dist/sitemap.xml';

  fs.writeFileSync(caminhoPublic, xml, 'utf8');
  console.log(`✅ Sitemap salvo em: ${caminhoPublic}`);

  // Copiar para dist se existir
  if (fs.existsSync('./dist')) {
    fs.writeFileSync(caminhoDist, xml, 'utf8');
    console.log(`✅ Sitemap salvo em: ${caminhoDist}`);
  }

  console.log(`\n📊 RESUMO:`);
  console.log(`   Páginas estáticas: ${paginasEstaticas.length}`);
  console.log(`   Artigos do blog: ${posts.length}`);
  console.log(`   Total de URLs: ${paginasEstaticas.length + posts.length}`);

  console.log(`\n🔗 URLs mais recentes:`);
  posts.slice(0, 5).forEach((post, i) => {
    console.log(`   ${i + 1}. ${SITE_URL}/blog/${post.slug}`);
  });

  console.log(`\n🎉 Sitemap gerado com sucesso!`);
  console.log(`📍 Acesse: ${SITE_URL}/sitemap.xml`);
}

gerarSitemap();
