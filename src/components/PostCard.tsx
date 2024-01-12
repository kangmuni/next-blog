import Image from 'next/image';
import Link from 'next/link';
import { Posts } from '../../service/posts';

type Props = {
  post: Posts;
};

export default function PostsCard({
  post: { number, title, date, path },
}: Props) {
  return (
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
  );
}
