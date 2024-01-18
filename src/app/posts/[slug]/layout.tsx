import Link from 'next/link';

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Link href={'/posts'} className="cursor-pointer text-xl font-semiblod">
        <i>←</i>
        <span>&nbsp;&nbsp;&nbsp;Back to home</span>
      </Link>
      <article>{children}</article>
    </main>
  );
}
