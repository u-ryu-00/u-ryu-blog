import { createServerClient, type CookieOptions } from '@supabase/ssr';

export const createClient = (
  cookies: Partial<{
    [key: string]: string;
  }>,
) => {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookies[name];
        },
      },
    },
  );
};
