import { useState, useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/hooks/useAuth';
import { useBlogPostById } from '@/hooks/useBlogPostById';
import {
  useCreatePost,
  useUpdatePost,
  useUploadImage,
  generateSlug,
  calculateReadingTime,
  CreatePostInput,
} from '@/hooks/useBlogAdmin';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Loader2, Save, ArrowLeft, Upload, X, Eye } from 'lucide-react';
import { toast } from 'sonner';
import valeriaFoto from '@/assets/valeria-foto.png';

const DashboardPostForm = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { data: existingPost, isLoading: loadingPost } = useBlogPostById(postId || '');
  const createPost = useCreatePost();
  const updatePost = useUpdatePost();
  const uploadImage = useUploadImage();

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [isPublished, setIsPublished] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [autoSlug, setAutoSlug] = useState(true);

  const isEditMode = !!postId;

  // Preencher formulário ao editar
  useEffect(() => {
    if (existingPost && isEditMode) {
      setTitle(existingPost.title);
      setSlug(existingPost.slug);
      setExcerpt(existingPost.excerpt);
      setContent(existingPost.content);
      setCoverImage(existingPost.cover_image || '');
      setCategory(existingPost.category || '');
      setTags(existingPost.tags?.join(', ') || '');
      setIsPublished(existingPost.is_published);
      setAutoSlug(false);
    }
  }, [existingPost, isEditMode]);

  // Gerar slug automaticamente
  useEffect(() => {
    if (autoSlug && title && !isEditMode) {
      setSlug(generateSlug(title));
    }
  }, [title, autoSlug, isEditMode]);

  if (authLoading || (isEditMode && loadingPost)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#8B5CF6]" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validar tipo de arquivo
    if (!file.type.startsWith('image/')) {
      toast.error('Por favor, selecione uma imagem válida');
      return;
    }

    // Validar tamanho (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('A imagem deve ter no máximo 5MB');
      return;
    }

    setIsUploading(true);
    try {
      const publicUrl = await uploadImage.mutateAsync(file);
      setCoverImage(publicUrl);
    } catch (error) {
      console.error('Erro ao fazer upload:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error('O título é obrigatório');
      return;
    }

    if (!slug.trim()) {
      toast.error('O slug é obrigatório');
      return;
    }

    if (!excerpt.trim()) {
      toast.error('O resumo é obrigatório');
      return;
    }

    if (!content.trim()) {
      toast.error('O conteúdo é obrigatório');
      return;
    }

    const readingTime = calculateReadingTime(content);
    const tagsArray = tags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const postData: CreatePostInput = {
      title,
      slug,
      excerpt,
      content,
      cover_image: coverImage || undefined,
      author: 'Valéria Dias',
      author_avatar: valeriaFoto,
      category: category || undefined,
      tags: tagsArray.length > 0 ? tagsArray : undefined,
      is_published: isPublished,
      published_at: isPublished ? new Date().toISOString() : undefined,
      reading_time: readingTime,
    };

    try {
      if (isEditMode && postId) {
        await updatePost.mutateAsync({ id: postId, data: postData });
        navigate('/dashboard/posts');
      } else {
        await createPost.mutateAsync(postData);
        navigate('/dashboard/posts');
      }
    } catch (error) {
      console.error('Erro ao salvar post:', error);
    }
  };

  const categories = [
    'Desenvolvimento Pessoal',
    'Autoconhecimento',
    'Carreira',
    'Bem-estar',
    'Mindfulness',
    'Produtividade',
  ];

  return (
    <DashboardLayout>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {isEditMode ? 'Editar Post' : 'Novo Post'}
            </h1>
            <p className="text-gray-600 mt-1">
              Preencha os campos abaixo para {isEditMode ? 'atualizar' : 'criar'} o post
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate('/dashboard/posts')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-6">
          {/* Título */}
          <div className="space-y-2">
            <Label htmlFor="title">Título *</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Digite o título do post"
              required
            />
          </div>

          {/* Slug */}
          <div className="space-y-2">
            <Label htmlFor="slug">Slug (URL) *</Label>
            <div className="flex gap-2">
              <Input
                id="slug"
                value={slug}
                onChange={(e) => {
                  setSlug(e.target.value);
                  setAutoSlug(false);
                }}
                placeholder="url-amigavel-do-post"
                required
              />
              {!isEditMode && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setAutoSlug(true)}
                  disabled={autoSlug}
                >
                  Auto
                </Button>
              )}
            </div>
            <p className="text-xs text-gray-500">
              URL: /blog/{slug || 'url-amigavel-do-post'}
            </p>
          </div>

          {/* Resumo */}
          <div className="space-y-2">
            <Label htmlFor="excerpt">Resumo *</Label>
            <Textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Breve descrição que aparecerá na listagem de posts"
              rows={3}
              required
            />
            <p className="text-xs text-gray-500">{excerpt.length} caracteres</p>
          </div>

          {/* Conteúdo */}
          <div className="space-y-2">
            <Label htmlFor="content">Conteúdo *</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Escreva o conteúdo completo do post aqui. Você pode usar formatação Markdown."
              rows={15}
              required
              className="font-mono text-sm"
            />
            <p className="text-xs text-gray-500">
              {content.split(/\s+/).filter(Boolean).length} palavras • ~
              {calculateReadingTime(content)} min de leitura
            </p>
          </div>

          {/* Imagem de Capa */}
          <div className="space-y-2">
            <Label htmlFor="cover-image">Imagem de Capa</Label>
            <div className="flex flex-col gap-3">
              {coverImage && (
                <div className="relative inline-block">
                  <img
                    src={coverImage}
                    alt="Capa"
                    className="w-full max-w-md h-48 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => setCoverImage('')}
                    className="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full hover:bg-red-700"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}
              <div>
                <Input
                  id="cover-image-file"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUploading}
                  className="hidden"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById('cover-image-file')?.click()}
                  disabled={isUploading}
                >
                  {isUploading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Upload className="h-4 w-4 mr-2" />
                      Upload de Imagem
                    </>
                  )}
                </Button>
                <p className="text-xs text-gray-500 mt-1">
                  Ou cole uma URL:
                </p>
                <Input
                  value={coverImage}
                  onChange={(e) => setCoverImage(e.target.value)}
                  placeholder="https://exemplo.com/imagem.jpg"
                  className="mt-2"
                />
              </div>
            </div>
          </div>

          {/* Categoria */}
          <div className="space-y-2">
            <Label htmlFor="category">Categoria</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma categoria" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <Label htmlFor="tags">Tags</Label>
            <Input
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="coaching, transformação, autoconhecimento"
            />
            <p className="text-xs text-gray-500">Separe as tags por vírgula</p>
          </div>

          {/* Publicar */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <Label htmlFor="publish" className="text-base">
                Publicar Post
              </Label>
              <p className="text-sm text-gray-500">
                {isPublished
                  ? 'O post está visível publicamente'
                  : 'Salvar como rascunho'}
              </p>
            </div>
            <Switch id="publish" checked={isPublished} onCheckedChange={setIsPublished} />
          </div>
        </div>

        {/* Ações */}
        <div className="flex gap-3">
          <Button
            type="submit"
            className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white"
            disabled={createPost.isPending || updatePost.isPending}
          >
            {createPost.isPending || updatePost.isPending ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Salvando...
              </>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                {isEditMode ? 'Atualizar' : 'Criar'} Post
              </>
            )}
          </Button>
          {isPublished && isEditMode && (
            <Button
              type="button"
              variant="outline"
              onClick={() => window.open(`/blog/${slug}`, '_blank')}
            >
              <Eye className="h-4 w-4 mr-2" />
              Visualizar
            </Button>
          )}
        </div>
      </form>
    </DashboardLayout>
  );
};

export default DashboardPostForm;
