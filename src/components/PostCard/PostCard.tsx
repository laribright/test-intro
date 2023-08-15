import { FC } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostCard;
