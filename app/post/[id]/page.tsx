import { getPostById } from '@/actions/getPostById';
import PostComponent from '@/components/post/post';
import Comments from '@/components/comment/comments';
import { getAllComments } from '@/actions/getAllComments';

export default async function Page({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id);
  const comments = await getAllComments();
  return (
    <div className="flex flex-col gap-4">
      <PostComponent post={post} fullPost={true} />
      <Comments comments={comments} />
    </div>
  );
}
