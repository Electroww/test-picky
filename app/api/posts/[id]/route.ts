import { NextResponse } from 'next/server';
import postsData from '@/data/discussion.json';

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  const post = postsData.filter((post) => post.id === parseInt(params.id, 10));
  if (post.length === 0) {
    return NextResponse.json({}, { status: 404 });
  }
  return NextResponse.json(post);
}
