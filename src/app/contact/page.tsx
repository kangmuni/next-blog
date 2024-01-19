import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Muni에게 메일 보내기',
};

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center">
      <ContactInfo />
      <ContactForm />
    </main>
  );
}
