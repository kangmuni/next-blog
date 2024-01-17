import path from 'path';
import { promises as fs } from 'fs';

export type Posts = {
  number: number;
  title: string;
  date: string;
  path: string;
  featured: boolean;
};

export async function getFeaturedPosts(): Promise<Posts[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts(): Promise<Posts[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => !post.featured));
}

export async function getAllPosts(): Promise<Posts[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

// export async function getPost(id: string): Promise<Posts | undefined> {
//   const products = await getPosts();
//   return products.find((item) => item.id === id);
// }
