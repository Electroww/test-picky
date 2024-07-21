import { NextResponse } from 'next/server';
import CommentsData from '@/data/comments.json';

export async function GET() {
  return NextResponse.json(CommentsData);
}
