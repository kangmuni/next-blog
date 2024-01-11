import type { Metadata } from 'next';
import Link from 'next/link';

import { Open_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

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
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        <Header />
        <div className="p-9">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
