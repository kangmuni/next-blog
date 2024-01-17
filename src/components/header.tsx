import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between p-9 pb-0">
      <Link href="/" className="text-3xl font-semibold">
        Muni's Blog
      </Link>
      <nav className="text-lg text-slate-500 font-semibold">
        <Link href="/" className="pr-4">
          Home
        </Link>
        <Link href="/about" className="pr-4">
          About
        </Link>
        <Link href="/posts" className="pr-4">
          Posts
        </Link>
        <Link href="/contact" className="pr-4">
          Contact
        </Link>
        <button>Mode</button>
      </nav>
    </header>
  );
}
