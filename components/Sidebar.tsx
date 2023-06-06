import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.png';
import LoginButton from './LoginButton';
import { buttonVariants } from '@/components/ui/button';
export default function Sidebar() {
  const buttonClass = `m-1 px-2 py-1 bg-indigo-600 ${buttonVariants({
    variant: 'outline',
  })}`;
  return (
    <aside>
      <div className="flex flex-col p-5 items-start bg-indigo-800 w-32 h-screen">
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <Link href="/food" className={buttonClass}>
          Food
        </Link>
        <Link href="/search" className={buttonClass}>
          Search
        </Link>
        <LoginButton />
      </div>
    </aside>
  );
}
