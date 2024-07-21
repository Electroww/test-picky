'use server';

import { PostType } from '@/types/post';

export const getAllPosts = async (): Promise<PostType[]> => {
  const posts = await fetch(`${process.env.URL}/api/posts`, {
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-store'
  });
  const data = await posts.json();
  return data;
};
