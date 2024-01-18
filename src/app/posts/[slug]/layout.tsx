import Link from 'next/link';

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex justify-center">
      <Link href={'/'} className="cursor-pointer text-xl font-medium">
        <span className="text-3xl font-bold">←</span>
        <span>&nbsp;&nbsp;&nbsp;Back to home</span>
      </Link>
      <article>{children}</article>
    </main>
  );
}
