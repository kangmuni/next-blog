import { redirect } from 'next/navigation';
import Image from 'next/image';

import { getPost } from '../../../../service/posts';

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPost(slug);

  if (!post) redirect('/posts');

  return (
    <section>
      <div className="text-center">
        <div className="mb-20">
          <h1 className="text-4xl font-bold mb-4">{post?.title}</h1>
          <h3 className="text-xl font-medium text-slate-400">{post?.date}</h3>
        </div>

        <Image
          src={`/images/${post?.path}`}
          alt={post?.title}
          width="500"
          height="550"
          className="m-2 rounded-md m-auto"
        />

        <p className="text-xl my-24">{post?.contents}</p>
      </div>
    </section>
  );
}
