import { Link } from 'react-router-dom';
import { Calendar, Clock, Eye, Tag } from 'lucide-react';
import { BlogPost } from '@/lib/supabase';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const formattedDate = format(new Date(post.published_at), "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });

  if (featured) {
    return (
      <Link
        to={`/blog/${post.slug}`}
        className="group block overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {post.cover_image && (
            <div className="relative h-64 md:h-full overflow-hidden">
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {post.category && (
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#8B5CF6] text-white text-sm font-medium">
                    <Tag className="h-3 w-3" />
                    {post.category}
                  </span>
                </div>
              )}
            </div>
          )}
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
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
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-[#8B5CF6] transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
            <div className="flex items-center gap-3">
              {post.author_avatar && (
                <img
                  src={post.author_avatar}
                  alt={post.author}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-[#8B5CF6]/20"
                />
              )}
              <div>
                <p className="text-sm font-medium text-gray-900">{post.author}</p>
                <p className="text-xs text-gray-500">Autora</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
    >
      {post.cover_image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.cover_image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {post.category && (
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#8B5CF6] text-white text-xs font-medium">
                <Tag className="h-3 w-3" />
                {post.category}
              </span>
            </div>
          )}
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-gray-600 mb-2">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.reading_time} min
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#8B5CF6] transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};
