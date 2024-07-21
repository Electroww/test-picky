import { NextResponse } from 'next/server';
import postsData from '@/data/discussion.json';

export async function GET() {
  return NextResponse.json(postsData);
}
