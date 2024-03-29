import Link from 'next/link';
import LinkButton from './LinkButton';

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-center pt-44 border-t-[1px]">
        <section className="flex flex-row justify-center w-6/12">
          <article>
            <div className="w-4/5">
              <p className="text-4xl font-semibold pb-8">Muni Kang</p>
              <p className="text-3xl text-slate-600 pb-8">
                Front-end Engineer who loves the value of learning and the charm
                of patience.
              </p>
            </div>
            <div>
              <LinkButton />
            </div>

            <div>
              <p className="text-lg py-20">
                All rights reserved © Muni Kang 2024
              </p>
            </div>
          </article>
        </section>

        <section>
          <p className="text-lg font-semibold pb-4">Sitemap</p>
          <ul className="text-lg text-slate-600 flex flex-col">
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
  );
}
