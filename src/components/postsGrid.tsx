import Image from 'next/image';
import Link from 'next/link';
import { Posts } from '../../service/posts';

type Props = {
  posts: Posts[];
};

export default function PostsGrid({ posts }: Props) {
  return (
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
  );
}
