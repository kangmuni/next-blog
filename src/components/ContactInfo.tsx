import Image from 'next/image';

import MessageImg from '../../public/images/message.webp';

export default function ContactInfo() {
  return (
    <section className="flex items-center justify-evenly h-screen">
      <div>
        <p className="text-4xl font-semibold pb-8">Any questions or ideas?</p>
        <p className="text-4xl text-slate-600 pb-8">
          Please feel free to contact me.
        </p>

        <div className="cursor-pointer text-xl font-medium mt-28">
          <span className="text-3xl font-bold">↓</span>
          <span>&nbsp;&nbsp;&nbsp;Contact me</span>
        </div>
      </div>

      <Image
        src={MessageImg}
        alt={'contactMe'}
        width="400"
        height="400"
        priority
      />
    </section>
  );
}
