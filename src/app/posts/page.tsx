import PostsGrid from '@/components/postsGrid';
import { getAllPosts } from '../../../service/posts';

export default async function PostsPage() {
  const allPosts = await getAllPosts();

  return <PostsGrid posts={allPosts} />;
}
