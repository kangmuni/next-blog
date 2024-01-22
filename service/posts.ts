import path from 'path';
import { promises as fs, readFile } from 'fs';

export type Posts = {
  number: number;
  title: string;
  date: string;
  path: string;
  featured: boolean;
};

export type PostData = Posts & { content: string };

export async function getFeaturedPosts(): Promise<Posts[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts(): Promise<Posts[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => !post.featured));
}

// export const getAllPosts = cache(async () => {
//   console.log('getAllPosts');

//   const filePath = path.join(process.cwd(), 'data', 'posts.json');
//   const data = await fs.readFile(filePath, 'utf-8');
//   return JSON.parse(data);
// });

export async function getAllPosts(): Promise<Posts[]> {
  console.log('getAllPosts');

  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
  const metadata = await getAllPosts() //
    .then((posts) => posts.find((post) => post.path === fileName));
  if (!metadata)
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

  const content = await fs.readFile(filePath, 'utf-8');
  return { ...metadata, content };
}
