import { redirect } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';

import { getPostData } from '../../../../service/posts';
import MakrkdownViewer from '@/components/MarkdownViewer';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title } = await getPostData(slug);
  return {
    title,
  };
}

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);

  if (!post) redirect('/posts');

  return (
    <section className="text-center my-9 mb-44">
      <div className="mb-9">
        <h1 className="text-4xl font-bold mb-4">{post?.title}</h1>
        <h3 className="text-xl font-medium text-slate-400">{post?.date}</h3>
      </div>

      <Image
        className="rounded-md mb-9 m-auto"
        src={`/images/topic3.avif`}
        alt={post?.title}
        width="500"
        height="550"
      />

      <MakrkdownViewer content={post?.content} />
    </section>
  );
}
