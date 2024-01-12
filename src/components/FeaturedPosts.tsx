import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedPosts } from '../../service/posts';
import PostsGrid from './postsGrid';

export default async function FeaturedPosts() {
  const featuredPosts = await getFeaturedPosts();

  return (
    <section className="w-9/12 mb-9">
      <p className="text-xl font-semibold pb-6">📎 Topics</p>
      <PostsGrid posts={featuredPosts} />
    </section>
  );
}
