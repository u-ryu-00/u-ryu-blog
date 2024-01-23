import PostCard from '@/components/PostCard';
import { createClient } from '@/utils/supabase/client';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const supabase = createClient();

export default function Home() {
  const { ref, inView } = useInView();

  const {
    data: postPages,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: async ({ pageParam }) => {
      const { data } = await supabase
        .from('Post')
        .select('*')
        .order('created_at', { ascending: false })
        .range(pageParam, pageParam + 4);
      if (!data)
        return {
          posts: [],
          nextPage: null,
        };
      return {
        posts: data,
        nextPage: data.length === 5 ? pageParam + 5 : null,
      };
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <div className="flex flex-col">
      <div className="container mx-auto grid grid-cols-2 gap-x-4 gap-y-6 px-4 pb-24 pt-20 lg:gap-x-7 lg:gap-y-12">
        {postPages?.pages
          .flatMap((page) => page.posts)
          .map((post) => <PostCard key={post.id} {...post} />)}
      </div>
      <div ref={ref} />
    </div>
  );
}
