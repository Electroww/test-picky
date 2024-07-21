import Image from 'next/image';

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
  const iconSize = variant === 'comment' ? 20 : 28;
  const textSize = variant === 'comment' ? 'text-sm' : 'text-base pt-1';
  return (
    <div className="flex gap-4">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-8 items-center">
          <div className="flex gap-2 items-center cursor-pointer transition-all duration-300 hover:bg-pink-700/10 rounded-full px-2 py-1">
            <Image
              src="/images/icon-upvote-14-px@3x.png"
              alt="Upvote"
              width={iconSize}
              height={iconSize}
            />
            <span className={`${textSize}`}>{upvoteCount}</span>
          </div>
          <div className="flex gap-2 items-center cursor-pointer transition-all duration-300 hover:bg-pink-700/10 rounded-full px-2 py-1">
            <Image
              src="/images/icon-comment-14-px@3x.png"
              alt="Comment"
              width={iconSize}
              height={iconSize}
            />
            <span className={`${textSize}`}>{commentCount}</span>
          </div>
          {viewCount ? (
            <div className="flex gap-2 items-center px-2 py-1">
              <span className="pt-1">{viewCount} Views</span>
            </div>
          ) : null}
        </div>
        {bookmark ? (
          <div className="flex gap-2 items-center cursor-pointer transition-all duration-300 hover:bg-pink-700/10 rounded-full px-2 py-2">
            <Image src="/images/icon-bookmark-14-px@3x.png" alt="Bookmark" width={24} height={24} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
