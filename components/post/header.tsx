import Image from 'next/image';
import { Badge } from '../ui/badge';

export default function PostHeader() {
  // const test = "test"
  return (
    <div className="flex gap-3">
      <div className="h-9 w-9 bg-black rounded-full overflow-hidden">
        <Image src="/images/picky.webp" width={500} height={500} alt="Picture of the author" />
      </div>
      <div className="flex flex-col justify-center font-kumbh">
        <div className="flex items-center gap-2">
          <div className="font-bold leading-4">Picky</div>
          <div>
            <Badge variant="skinType">Oily/Resilient</Badge>
          </div>
        </div>
        <div className="text-xs text-black/50">2 days ago</div>
      </div>
    </div>
  );
}
