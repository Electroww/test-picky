'use server';

import { PostType } from '@/types/post';

export const getPostById = async (id: string): Promise<PostType> => {
  const post = await fetch(`${process.env.URL}/api/posts/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-store'
  });

  if (post.status === 404) {
    throw new Error('Post not found');
  }

  const [data] = await post.json();
  return data;
};
