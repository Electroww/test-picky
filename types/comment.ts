export type Comment = {
  id: number;
  content: string;
  image_urls: string[];
  viewCount: number;
  upvoteCount: number;
  commentCount: number;
  category: {
    id: number;
    label: string;
  };
  user: {
    id: number;
    image_url: string;
    nick_name: string;
    skin_type: string;
  };
  createdAt: string;
  replies: Comment[];
};
