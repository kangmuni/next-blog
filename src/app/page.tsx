import FeaturedPosts from '@/components/FeaturedPosts';
import Hero from '@/components/hero';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts />
    </>
  );
}
