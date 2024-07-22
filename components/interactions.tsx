import { Icons } from './icons';

type PropsType = {
  upvoteCount: number;
  commentCount: number;
  viewCount?: number;
  bookmark?: boolean;
  variant: 'comment' | 'post';
};

export default function Interactions({
  upvoteCount,
  commentCount,
  viewCount,
  bookmark,
  variant
}: PropsType) {
  const iconSize = variant === 'comment' ? 'w-5 h-5' : 'w-6 h-6';
  const textSize = variant === 'comment' ? 'text-sm' : 'text-base pt-1';
  const interactionsStyle =
    'flex gap-2 items-center cursor-pointer transition-all duration-300 text-black/50  hover:text-pink-700 hover:bg-pink-700/10 rounded-full px-2 py-1';
  return (
    <div className="flex gap-4">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-8 items-center">
          <div className={`${interactionsStyle}`}>
            <Icons.upvote className={`${iconSize} `} />
            <span data-testid="upvote-count" className={`${textSize}`}>
              {upvoteCount}
            </span>
          </div>
          <div className={`${interactionsStyle}`}>
            <Icons.comment className={`${iconSize}`} />
            <span data-testid="comment-count" className={`${textSize}`}>
              {commentCount}
            </span>
          </div>
          {viewCount ? (
            <div className="flex gap-2 items-center px-2 py-1">
              <span data-testid="view-count" className="pt-1 text-black/50">
                {viewCount} Views
              </span>
            </div>
          ) : null}
        </div>
        {bookmark ? (
          <div className={`${interactionsStyle}`}>
            <Icons.bookmark className={`h-6 w-6`} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
