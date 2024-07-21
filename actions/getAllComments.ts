'use server';
import type { Comment } from '@/types/comment';

export const getAllComments = async (): Promise<Comment[]> => {
  const comments = await fetch(`${process.env.URL}/api/comments`, {
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-store'
  });
  const data = await comments.json();
  return data;
};
