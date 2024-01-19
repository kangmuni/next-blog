'use client';

import Image from 'next/image';

import ContactProfileImg from '../../public/images/muni3.png';
import { ChangeEvent, FormEvent, useState } from 'react';

type Form = {
  from: string;
  title: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>({
    from: '',
    title: '',
    message: '',
  });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="flex items-center h-screen w-full pb-60">
      <div className="w-2/5">
        <Image
          src={ContactProfileImg}
          alt={'contact_muni'}
          width="500"
          height="500"
          priority
        />
      </div>

      <form className="flex flex-col w-3/5 ml-4" onSubmit={onSubmit}>
        <div className="flex flex-col mb-4">
          <label htmlFor="from" className="font-semibold">
            Your Email Adress
          </label>
          <input
            type="email"
            id="from"
            name="from"
            required
            autoFocus
            value={form.from}
            onChange={onChange}
            placeholder="kangmoonee@gmail.com"
            className="focus:outline-none focus:ring focus:border-blue-100 rounded border-2 border-solid boder-slate-100 h-12 mt-2 p-2"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="title" className="font-semibold">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            autoFocus
            value={form.title}
            onChange={onChange}
            placeholder="Title"
            className="focus:outline-none focus:ring focus:border-blue-100 rounded border-2 border-solid boder-slate-100 h-12 mt-2 p-2"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="message" className="font-semibold">
            Message
          </label>
          <textarea
            rows={12}
            id="message"
            name="message"
            required
            autoFocus
            value={form.message}
            onChange={onChange}
            placeholder="Enter your message here"
            className="focus:outline-none focus:ring focus:border-blue-100 rounded border-2 border-solid boder-slate-100 mt-2 p-2"
          />
        </div>

        <button className="p-3 bg-zinc-300 text-white rounded text-extrabold text-lg">
          Send
        </button>
      </form>
    </section>
  );
}
