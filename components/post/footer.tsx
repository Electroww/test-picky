import Image from 'next/image';

export default function Footer() {
  return (
    <div className="flex gap-4">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-8 items-center">
          <div className="flex gap-2 items-center cursor-pointer transition-all duration-300 hover:bg-pink-700/10 rounded-full px-2 py-1">
            <Image src="/images/icon-upvote-14-px@3x.png" alt="Upvote" width={28} height={28} />
            <span className="pt-1">857</span>
          </div>
          <div className="flex gap-2 items-center cursor-pointer transition-all duration-300 hover:bg-pink-700/10 rounded-full px-2 py-1">
            <Image src="/images/icon-comment-14-px@3x.png" alt="Comment" width={28} height={28} />
            <span className="pt-1">136</span>
          </div>
          <div className="flex gap-2 items-center px-2 py-1">
            <span className="pt-1">7.589 Views</span>
          </div>
        </div>
        <div className="flex gap-2 items-center cursor-pointer transition-all duration-300 hover:bg-pink-700/10 rounded-full px-2 py-2">
          <Image src="/images/icon-bookmark-14-px@3x.png" alt="Bookmark" width={24} height={24} />
        </div>
      </div>
    </div>
  );
}
