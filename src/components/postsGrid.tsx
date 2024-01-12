import Image from 'next/image';
import Link from 'next/link';

import { Posts } from '../../service/posts';
import PostsCard from './PostCard';

type Props = {
  posts: Posts[];
};

export default function PostsGrid({ posts }: Props) {
  return (
    <ul className="my-2 flex flex-wrap list-none">
      {posts.map((post) => (
        <li key={post.path}>
          <PostsCard post={post} />
        </li>
      ))}
    </ul>
  );
}
