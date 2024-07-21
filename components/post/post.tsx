import { PostType } from '@/types/post';
import Content from './content';
import Footer from './footer';
import Header from './header';
import Link from 'next/link';

type PropsType = {
  post: PostType;
  fullPost?: boolean;
};

export default function Post({ post, fullPost }: PropsType) {
  return (
    <Link href={`/post/${post.id}`}>
      <div
        className={`flex flex-col gap-4 cursor-pointer transition-all duration-300 p-4 rounded-2xl ${!fullPost ? 'hover:bg-black/5' : ''}`}>
        <Header author={post.user} createdAt={post.createdAt} />
        <Content
          title={post.title}
          content={post.content}
          images={post.image_urls}
          category={post.category}
          fullContent={fullPost}
        />
        <Footer
          viewCount={post.viewCount}
          commentCount={post.commentCount}
          upvoteCount={post.upvoteCount}
        />
      </div>
    </Link>
  );
}
