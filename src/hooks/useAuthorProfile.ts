import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

export interface AuthorProfile {
  id: string;
  name: string;
  bio?: string;
  avatar_url?: string;
  email?: string;
  instagram?: string;
  facebook?: string;
  linkedin?: string;
  twitter?: string;
  whatsapp?: string;
  created_at: string;
  updated_at: string;
}

export interface UpdateAuthorProfileInput {
  name: string;
  bio?: string;
  avatar_url?: string;
  email?: string;
  instagram?: string;
  facebook?: string;
  linkedin?: string;
  twitter?: string;
  whatsapp?: string;
}

// Hook para buscar o perfil do autor
export const useAuthorProfile = () => {
  return useQuery({
    queryKey: ['author-profile'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('author_profile')
        .select('*')
        .limit(1)
        .single();

      if (error) throw error;
      return data as AuthorProfile;
    },
  });
};

// Hook para atualizar o perfil
export const useUpdateAuthorProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: UpdateAuthorProfileInput) => {
      // Primeiro verifica se já existe um perfil
      const { data: existing } = await supabase
        .from('author_profile')
        .select('id')
        .limit(1)
        .single();

      if (existing) {
        // Atualiza o perfil existente
        const { data, error } = await supabase
          .from('author_profile')
          .update(input)
          .eq('id', existing.id)
          .select()
          .single();

        if (error) throw error;
        return data;
      } else {
        // Cria novo perfil
        const { data, error } = await supabase
          .from('author_profile')
          .insert(input)
          .select()
          .single();

        if (error) throw error;
        return data;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['author-profile'] });
      toast.success('Perfil atualizado com sucesso!');
    },
    onError: (error) => {
      console.error('Erro ao atualizar perfil:', error);
      toast.error('Erro ao atualizar perfil. Tente novamente.');
    },
  });
};

// Hook para upload de avatar
export const useUploadAvatar = () => {
  return useMutation({
    mutationFn: async (file: File) => {
      // Gerar nome único para o arquivo
      const fileExt = file.name.split('.').pop();
      const fileName = `avatar-${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      // Upload do arquivo
      const { error: uploadError } = await supabase.storage
        .from('author-avatars')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: true,
        });

      if (uploadError) throw uploadError;

      // Obter URL pública
      const {
        data: { publicUrl },
      } = supabase.storage.from('author-avatars').getPublicUrl(filePath);

      return publicUrl;
    },
    onSuccess: () => {
      toast.success('Imagem enviada com sucesso!');
    },
    onError: (error) => {
      console.error('Erro ao enviar imagem:', error);
      toast.error('Erro ao enviar imagem. Tente novamente.');
    },
  });
};
