import Image from 'next/image';
import { Badge } from './ui/badge';
import type { PostType } from '@/types/post';
import dayjs from '@/lib/dayjs';

type PropsType = {
  author: PostType['user'];
  createdAt: string;
};

export default function PostHeader({ author, createdAt }: PropsType) {
  const dateTimeFromNow = dayjs(createdAt).fromNow();
  return (
    <div className="flex gap-2.5">
      <div className="h-9 w-9 bg-black rounded-full overflow-hidden relative">
        <Image
          src={author.image_url}
          className="object-cover h-14"
          alt="Picture of the author"
          height={100}
          width={100}
        />
      </div>
      <div className="flex flex-col justify-center font-sans">
        <div className="flex items-center gap-2">
          <div className="font-bold leading-4">{author.nick_name}</div>
          <div>
            <Badge variant="skinType">{author.skin_type}</Badge>
          </div>
        </div>
        <div className="text-xs text-black/50">{dateTimeFromNow}</div>
      </div>
    </div>
  );
}
