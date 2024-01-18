import { getAllPosts } from '../../../service/posts';

import FilterablePosts from '@/components/FilterablePosts';

export default async function PostsPage() {
  const allPosts = await getAllPosts();
  const categories = [...new Set(allPosts.map((post) => post.title))];

  return <FilterablePosts posts={allPosts} categories={categories} />;
}
