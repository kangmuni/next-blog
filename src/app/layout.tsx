import type { Metadata } from 'next';
import Link from 'next/link';

import { Open_Sans } from 'next/font/google';
import './globals.css';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `Muni's Blog`,
  description: 'Welcome to my blog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body>
        <header className="flex justify-between p-9">
          <Link href="/" className="text-4xl font-semibold">
            Muni's Blog
          </Link>
          <nav className="text-2xl font-normal text-slate-600">
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

        <div className="p-9">{children}</div>

        <footer>
          <div className="flex justify-center">
            <section className="flex flex-row justify-center w-6/12">
              <article>
                <div className="w-4/5">
                  <p className="text-4xl font-semibold pb-8">Muni Kang</p>
                  <p className="text-3xl text-slate-600 pb-8">
                    Front-end Engineer who loves the value of learning and the
                    charm of patience.
                  </p>
                </div>
                <div>
                  <Link href="/" className="pr-2">
                    gitHub
                  </Link>
                  <Link href="/">profile</Link>
                </div>

                <div>
                  <p className="text-2xl text-slate-600 pt-9">
                    All rights reserved © Muni Kang 2024
                  </p>
                </div>
              </article>
            </section>

            <section>
              <p className="text-2xl font-semibold pb-4">Sitemap</p>
              <ul className="text-xl text-slate-600 flex flex-col">
                <Link href="/" className="pb-3">
                  Home
                </Link>
                <Link href="/about" className="pb-3">
                  About
                </Link>
                <Link href="/posts" className="pb-3">
                  Posts
                </Link>
                <Link href="/contact">Contact</Link>
              </ul>
            </section>
          </div>
        </footer>
      </body>
    </html>
  );
}
