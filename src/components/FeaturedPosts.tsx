import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedPosts, getPosts } from '../../service/posts';
import PostsGrid from './postsGrid';

export default async function FeaturedPosts() {
  const featuredPosts = await getFeaturedPosts();

  return (
    <section className="w-9/12 mb-9">
      <p className="text-xl font-semibold pb-6">Topics</p>
      <article>
        <ul className="flex list-none mb-9">
          <li className="cursor-pointer mr-6 py-2 px-8 border-solid rounded-full bg-slate-100 hover:bg-slate-600 hover:text-white">
            JavaScript
          </li>
          <li className="cursor-pointer mr-6 py-2 px-8 border-solid rounded-full bg-slate-100 hover:bg-slate-600 hover:text-white">
            TypeScript
          </li>
          <li className="cursor-pointer mr-6 py-2 px-8 border-solid rounded-full bg-slate-100 hover:bg-slate-600 hover:text-white">
            React
          </li>
          <li className="cursor-pointer mr-6 py-2 px-8 border-solid rounded-full bg-slate-100 hover:bg-slate-600 hover:text-white">
            Next.js
          </li>
        </ul>

        <PostsGrid posts={featuredPosts} />
      </article>
    </section>
  );
}
