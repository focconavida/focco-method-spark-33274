import { useQuery } from '@tanstack/react-query';
import { supabase, BlogPost } from '@/lib/supabase';

/**
 * Hook para buscar todos os posts publicados do blog
 */
export const useBlogPosts = () => {
  return useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false });

      if (error) {
        throw new Error(error.message);
      }

      return data as BlogPost[];
    },
  });
};

/**
 * Hook para buscar um post específico pelo slug
 */
export const useBlogPost = (slug: string) => {
  return useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();

      if (error) {
        throw new Error(error.message);
      }

      // Incrementa as visualizações
      if (data) {
        await supabase
          .from('blog_posts')
          .update({ views: (data.views || 0) + 1 })
          .eq('id', data.id);
      }

      return data as BlogPost;
    },
    enabled: !!slug,
  });
};

/**
 * Hook para buscar posts por categoria
 */
export const useBlogPostsByCategory = (category: string) => {
  return useQuery({
    queryKey: ['blog-posts', 'category', category],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('is_published', true)
        .eq('category', category)
        .order('published_at', { ascending: false });

      if (error) {
        throw new Error(error.message);
      }

      return data as BlogPost[];
    },
    enabled: !!category,
  });
};

/**
 * Hook para buscar posts relacionados (mesma categoria, excluindo o post atual)
 */
export const useRelatedPosts = (currentSlug: string, category?: string, limit = 3) => {
  return useQuery({
    queryKey: ['related-posts', currentSlug, category],
    queryFn: async () => {
      let query = supabase
        .from('blog_posts')
        .select('*')
        .eq('is_published', true)
        .neq('slug', currentSlug);

      if (category) {
        query = query.eq('category', category);
      }

      const { data, error } = await query
        .order('published_at', { ascending: false })
        .limit(limit);

      if (error) {
        throw new Error(error.message);
      }

      return data as BlogPost[];
    },
    enabled: !!currentSlug,
  });
};
