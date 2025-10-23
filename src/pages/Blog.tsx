import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BlogCard } from '@/components/BlogCard';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { Search, Loader2 } from 'lucide-react';

const Blog = () => {
  const { data: posts, isLoading, error } = useBlogPosts();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filtrar posts por busca e categoria
  const filteredPosts = posts?.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Extrair categorias únicas
  const categories = ['all', ...new Set(posts?.map((post) => post.category).filter(Boolean))];

  const featuredPost = filteredPosts?.[0];
  const regularPosts = filteredPosts?.slice(1);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-44 md:pt-48 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog do Método FOCCO
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Descubra insights valiosos sobre desenvolvimento pessoal, coaching e transformação de vida
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-[#8B5CF6] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category === 'all' ? 'Todos' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {isLoading && (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-[#8B5CF6]" />
            </div>
          )}

          {error && (
            <div className="text-center py-20">
              <p className="text-red-600 mb-4">
                Erro ao carregar os posts. Por favor, tente novamente mais tarde.
              </p>
              <p className="text-sm text-gray-500">{error.message}</p>
            </div>
          )}

          {!isLoading && !error && filteredPosts && filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600">Nenhum post encontrado.</p>
            </div>
          )}

          {!isLoading && !error && filteredPosts && filteredPosts.length > 0 && (
            <>
              {/* Featured Post */}
              {featuredPost && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Post em Destaque</h2>
                  <BlogCard post={featuredPost} featured />
                </div>
              )}

              {/* Regular Posts Grid */}
              {regularPosts && regularPosts.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {searchTerm || selectedCategory !== 'all'
                      ? 'Resultados da Busca'
                      : 'Últimos Posts'}
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regularPosts.map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
