import Image from 'next/image';

import HomeProfileImg from '../../public/images/muni2.png';
import LinkButton from './linkButton';

export default function Hero() {
  return (
    <section className="flex w-9/12 items-center h-screen">
      <div className="w-4/5 ">
        <p className="text-4xl font-semibold pb-8">Welcome to my blog 🥨</p>
        <p className="text-4xl text-slate-600 pb-8">
          Find the latest of my writing here.
        </p>
        <LinkButton />
      </div>

      {/* <div className="border-solid border-2 border-slate-100 rounded-full shadow-lg p-2"> */}
      <Image
        src={HomeProfileImg}
        alt={'home_muni'}
        width="500"
        height="400"
        priority
      />
      {/* </div> */}
    </section>
  );
}
