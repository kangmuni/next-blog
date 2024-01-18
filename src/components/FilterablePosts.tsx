'use client';

import { useState } from 'react';

import { Posts } from '../../service/posts';

import PostsGrid from './PostsGrid';
import Categories from './Categories';

type Props = { posts: Posts[]; categories: string[] };

const ALL_POSTS = 'All Posts';

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);

  const filterd =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.title === selected);

  return (
    <section className="">
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected} // selected => setSelected(selected)
      />
      <PostsGrid posts={filterd} />
    </section>
  );
}
