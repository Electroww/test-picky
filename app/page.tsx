import Post from '@/components/post/post';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <Post />
      <div className="h-[1px] w-full bg-black/10" />
    </main>
  );
}
