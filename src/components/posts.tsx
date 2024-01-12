import Image from 'next/image';
import Link from 'next/link';
import { getPosts } from '../../service/posts';

export default async function Posts() {
  const posts = await getPosts();

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

        <ul className="my-2 flex flex-wrap list-none">
          {posts.map(({ number, title, date, path }, index) => {
            return (
              <li key={index}>
                <Link href={`posts/topics${number}`}>
                  <Image
                    src={`/images/${path}`}
                    alt={title}
                    width="330"
                    height="280"
                    className="m-2 rounded-md"
                  />
                  <div className="mt-2 mb-8 ml-2">
                    <p className="text-slate-300 font-bold text-xl">{date}</p>
                    <span className="font-medium text-3xl">{title}</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
}
