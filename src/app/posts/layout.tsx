export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="w-9/12 mt-24">
      <ul className="flex list-none">
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
      <main className="flex justify-center my-11">{children}</main>
    </article>
  );
}
