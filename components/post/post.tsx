import { PostType } from '@/types/post';
import Content from './content';
import Footer from './footer';
import UserInfos from '../userInfos';
import Link from 'next/link';

type PropsType = {
  post: PostType;
  fullPost?: boolean;
};

export default function Post({ post, fullPost }: PropsType) {
  return (
    <Link href={`/post/${post.id}`}>
      <div
        className={`flex flex-col gap-4 cursor-pointer ${!fullPost ? 'transition-all duration-300 p-4 rounded-2xl hover:bg-gray-100' : ''}`}>
        <UserInfos author={post.user} createdAt={post.createdAt} />
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
