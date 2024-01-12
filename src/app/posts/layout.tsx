export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="flex justify-center my-11">{children}</main>;
}
