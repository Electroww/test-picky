import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';

export default function Content() {
  return (
    <div className="flex flex-col gap-3">
      <h1>MEGA GIVEAWAY ALERT - High chance of winning! Apply now!</h1>
      <div className="flex">
        <Badge variant="postCategory">Skin Concern</Badge>
      </div>
      <div className="line-clamp-3 text-ellipsis">
        Apply now to get the Perfect Serum Original Hair Serum! It’s a mega Giveaway so there is a
        high chance that you will be selected! ✨ Apply now to get the Perfect Serum Original Hair
        Serum! It’s a mega Giveaway so there is a high chance that you will be selected! ✨
      </div>
      <div>
        <Carousel opts={{ dragFree: true }}>
          <CarouselContent className="ml-0 gap-2 h-72">
            <CarouselItem className="basis-72 relative overflow-hidden rounded-3xl">
              <Image
                src="/images/image1.webp"
                alt="Picture of the author"
                layout="fill"
                objectFit="contain"
              />
            </CarouselItem>
            <CarouselItem className="basis-72 relative overflow-hidden rounded-3xl">
              <Image
                src="/images/image1.webp"
                alt="Picture of the author"
                layout="fill"
                objectFit="contain"
              />
            </CarouselItem>
            <CarouselItem className="basis-72 relative overflow-hidden rounded-3xl">
              <Image
                src="/images/image1.webp"
                alt="Picture of the author"
                layout="fill"
                objectFit="contain"
              />
            </CarouselItem>
            <CarouselItem className="basis-72 relative overflow-hidden rounded-3xl">
              <Image
                src="/images/image1.webp"
                alt="Picture of the author"
                layout="fill"
                objectFit="contain"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
