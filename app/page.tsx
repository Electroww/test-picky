import { getAllPosts } from '@/actions/getAllPosts';
import PostComponent from '@/components/post/post';

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <main className="flex flex-col items-center gap-3">
      {posts.map((post) => (
        <div className="flex flex-col items-center gap-3" key={post.id}>
          <PostComponent key={post.id} post={post} />
          <div className="h-[1px] w-full bg-black/10" />
        </div>
      ))}
    </main>
  );
}
