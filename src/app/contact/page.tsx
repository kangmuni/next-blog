import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center">
      <ContactInfo />
      <ContactForm />
    </main>
  );
}
