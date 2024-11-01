import Image from 'next/image';
import Link from 'next/link';

import { Navigation } from './navigation';
import { DottedSeparator } from './dotted-separator';
import { WorkspaceSwitcher } from './workspace-switcher';

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={90} height={50} />
      </Link>
      <div className="px-7">
        <DottedSeparator className="my-4" />
      </div>
      <WorkspaceSwitcher />
      <div className="px-7">
        <DottedSeparator className="my-4" />
      </div>
      <Navigation />
    </aside>
  );
};
