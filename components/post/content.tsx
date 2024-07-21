import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { PostType } from '@/types/post';
import Image from 'next/image';

type PropsType = {
  title: string;
  content: string;
  images: string[];
  category: PostType['category'];
  fullContent?: boolean;
};

export default function Content({ title, content, images, category, fullContent }: PropsType) {
  return (
    <div className="flex flex-col gap-3">
      <h1>{title}</h1>
      <div className="flex">
        <Badge className="border-pink-600 text-pink-600" variant="postCategory">
          {category.label}
        </Badge>
      </div>
      <div className={!fullContent ? 'line-clamp-3 text-ellipsis' : ''}>{content}</div>
      <div>
        <Carousel opts={{ dragFree: true }}>
          <CarouselContent className="ml-0 gap-2 h-72">
            {images.map((image, index) => (
              <CarouselItem
                key={`${image}-${index}`}
                className="basis-72 relative overflow-hidden rounded-3xl">
                <Image src={image} alt="Picture of the author" fill className="object-contain" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
