import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BlogCard } from '@/components/BlogCard';
import { useBlogPost, useRelatedPosts } from '@/hooks/useBlogPosts';
import { Calendar, Clock, Eye, ArrowLeft, Share2 } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = useBlogPost(slug || '');
  const { data: relatedPosts } = useRelatedPosts(slug || '', post?.category);
  const { toast } = useToast();

  const handleShare = async () => {
    const url = window.location.href;
    const title = post?.title || 'Método FOCCO';

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
      } catch (err) {
        console.error('Erro ao compartilhar:', err);
      }
    } else {
      // Fallback: copiar para clipboard
      try {
        await navigator.clipboard.writeText(url);
        toast({
          title: 'Link copiado!',
          description: 'O link foi copiado para a área de transferência.',
        });
      } catch (err) {
        console.error('Erro ao copiar:', err);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <div className="flex-1 flex justify-center items-center">
          <Loader2 className="h-8 w-8 animate-spin text-[#8B5CF6]" />
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <div className="flex-1 flex flex-col justify-center items-center px-4 py-20">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post não encontrado</h1>
          <p className="text-gray-600 mb-8">
            O post que você está procurando não existe ou foi removido.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B5CF6] text-white rounded-full hover:bg-[#7C3AED] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const formattedDate = format(new Date(post.published_at), "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Back Button */}
      <div className="pt-28 pb-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#8B5CF6] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o Blog
          </Link>
        </div>
      </div>

      {/* Cover Image */}
      {post.cover_image && (
        <div className="w-full h-[400px] overflow-hidden">
          <img
            src={post.cover_image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Article Content */}
      <article className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Category */}
          {post.category && (
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#8B5CF6] text-white text-sm font-medium">
                {post.category}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{post.title}</h1>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6 pb-6 border-b">
            <div className="flex items-center gap-3">
              {post.author_avatar && (
                <img
                  src={post.author_avatar}
                  alt={post.author}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#8B5CF6]/20"
                />
              )}
              <div>
                <p className="font-medium text-gray-900">{post.author}</p>
                <p className="text-sm text-gray-500">Autora</p>
              </div>
            </div>
            <div className="flex-1" />
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.reading_time} min
              </span>
              {post.views > 0 && (
                <span className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {post.views}
                </span>
              )}
              <button
                onClick={handleShare}
                className="flex items-center gap-1 hover:text-[#8B5CF6] transition-colors"
                aria-label="Compartilhar"
              >
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Excerpt */}
          <div className="text-xl text-gray-600 mb-8 italic border-l-4 border-[#8B5CF6] pl-4">
            {post.excerpt}
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-[#8B5CF6] prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Posts Relacionados</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para transformar sua vida?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Agende uma sessão de diagnóstico gratuita e descubra como o Método FOCCO pode ajudá-lo
          </p>
          <Link
            to="/contato"
            className="inline-block px-8 py-4 bg-white text-[#8B5CF6] rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Agendar Consulta Gratuita
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
