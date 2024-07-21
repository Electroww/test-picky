import { PostType } from '@/types/post';
import Content from './content';
import Footer from './footer';
import Header from './header';

type PropsType = {
  post: PostType;
};

export default function Post({ post }: PropsType) {
  return (
    <div className="flex flex-col gap-4 cursor-pointer transition-all duration-300 hover:bg-black/5 p-4 rounded-2xl">
      <Header author={post.user} createdAt={post.createdAt} />
      <Content
        title={post.title}
        content={post.content}
        images={post.image_urls}
        category={post.category}
      />
      <Footer
        viewCount={post.viewCount}
        commentCount={post.commentCount}
        upvoteCount={post.upvoteCount}
      />
    </div>
  );
}
