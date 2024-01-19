import { Metadata } from 'next';
import { getAllPosts } from '../../../service/posts';

import FilterablePosts from '@/components/FilterablePosts';

export const metadata: Metadata = {
  title: 'All Posts',
  description: '프론트 관련 블로그 글',
};

export default async function PostsPage() {
  const allPosts = await getAllPosts();
  const categories = [...new Set(allPosts.map((post) => post.title))];

  return <FilterablePosts posts={allPosts} categories={categories} />;
}
