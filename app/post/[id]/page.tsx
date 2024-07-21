import { getPostById } from '@/actions/getPostById';
import PostComponent from '@/components/post/post';

export default async function Page({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id);
  return (
    <div>
      <PostComponent post={post} fullPost={true} />
    </div>
  );
}
