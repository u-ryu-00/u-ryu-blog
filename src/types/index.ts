import { Database } from './supabase';

export type Post = Omit<
  Database['public']['Tables']['Post']['Insert'],
  'tags'
> & {
  tags: string[];
};
export type PostRequest = Database['public']['Tables']['Post']['Insert'];
