import { useQuery } from '@tanstack/react-query';
import { supabase, BlogPost } from '@/lib/supabase';

/**
 * Hook para buscar um post pelo ID (para admin)
 * Não filtra por is_published e não incrementa views
 */
export const useBlogPostById = (id: string) => {
  return useQuery({
    queryKey: ['blog-post-by-id', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data as BlogPost;
    },
    enabled: !!id,
  });
};
