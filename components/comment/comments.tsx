import { Button } from '@/components/ui/button';
import UserInfos from '../userInfos';
import type { Comment } from '@/types/comment';
import Interactions from '@/components/interactions';

type PropsType = {
  comments: Comment[];
};

export default function Comments({ comments }: PropsType) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h2>Comments</h2>
        <Button variant="outline">Write a comment</Button>
      </div>
      {comments.map((comment) => (
        <div className="flex flex-col gap-3" key={comment.id}>
          <UserInfos author={comment.user} createdAt={comment.createdAt} />
          <div className="pl-11">{comment.content}</div>
          <div className="pl-11">
            <Interactions
              variant="comment"
              commentCount={comment.commentCount}
              upvoteCount={comment.upvoteCount}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
