import Image from 'next/image';
import { Badge } from './ui/badge';
import type { PostType } from '@/types/post';
import dayjs from '@/lib/dayjs';

type PropsType = {
  author: PostType['user'];
  createdAt: string;
};

export default function UserInfos({ author, createdAt }: PropsType) {
  const dateTimeFromNow = dayjs(createdAt).fromNow();
  return (
    <div className="flex gap-2.5">
      <div className="h-9 w-9 bg-black rounded-full overflow-hidden relative">
        <Image
          data-testid="author-image"
          src={author.image_url}
          className="object-cover h-14"
          alt="Picture of the author"
          height={100}
          width={100}
        />
      </div>
      <div className="flex flex-col justify-center font-sans">
        <div className="flex items-center gap-2">
          <div data-testid="nick-name" className="font-bold leading-4">
            {author.nick_name}
          </div>
          <div>
            <Badge data-testid="skin-type" variant="skinType">
              {author.skin_type}
            </Badge>
          </div>
        </div>
        <div data-testid="date" className="text-xs text-black/50">
          {dateTimeFromNow}
        </div>
      </div>
    </div>
  );
}
