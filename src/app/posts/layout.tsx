export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="w-9/12 mt-24">
      <main className="flex my-11">{children}</main>
    </article>
  );
}
