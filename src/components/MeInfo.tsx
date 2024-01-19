import Image from 'next/image';

import HomeProfileImg from '../../public/images/muni.png';

export default function MeInfo() {
  return (
    <section className="flex w-9/12 items-center h-screen">
      <div className="w-4/5 tracking-normal">
        <p className="text-4xl font-semibold pb-8 leading-noramal">
          Hi, I'm Muni Kang, I'm a front-end engineer.
        </p>
        <p className="text-4xl text-slate-600 pb-8 leading-normal">
          I love making applications that create new values for the world.
        </p>
      </div>
      <div className="border-solid border-2 border-slate-100 rounded-full shadow-lg p-2">
        <Image
          src={HomeProfileImg}
          alt={'home_muni'}
          width="500"
          height="400"
          priority
        />
      </div>
    </section>
  );
}
