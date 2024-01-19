import type { Metadata } from 'next';

import MeInfo from '@/components/MeInfo';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Muni 소개',
};

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center">
      <MeInfo />
    </main>
  );
}
