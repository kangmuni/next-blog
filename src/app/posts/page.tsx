import PostsGrid from '@/components/PostsGrid';
import { getAllPosts } from '../../../service/posts';

export default async function PostsPage() {
  const allPosts = await getAllPosts();

  return <PostsGrid posts={allPosts} />;
}
