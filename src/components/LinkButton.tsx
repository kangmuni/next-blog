import Link from 'next/link';

import { PiGithubLogoFill } from 'react-icons/pi';
import { RxNotionLogo } from 'react-icons/rx';

export default function LinkButton() {
  return (
    <ul className="flex">
      <li className="mr-2">
        <Link href={'https://github.com/kangmuni'}>
          <PiGithubLogoFill className="text-3xl" />
        </Link>
      </li>
      <li>
        <Link
          href={
            'https://www.notion.so/kangmuni/309f202d8fc34f8fbdd663411b4327a5?pvs=4'
          }
        >
          <RxNotionLogo className="text-3xl" />
        </Link>
      </li>
    </ul>
  );
}
