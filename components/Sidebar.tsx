import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.png';
import LoginButton from './LoginButton';
import ThemeButton from '@components/ThemeButton';
import {
  HomeIcon,
  ArchiveBoxIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
export default function Sidebar() {
  const style =
    'flex gap-x-2 text-black rounded-xl m-1 px-2 py-1 bg-indigo-200';
  return (
    <aside>
      <div className="flex flex-col p-5 items-start bg-indigo-700 w-40 h-screen">
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <Link href="/dashboard" className={style}>
          <HomeIcon className="h-5 w-5" /> Dashboard
        </Link>
        <Link href="/food" className={style}>
          <ArchiveBoxIcon className="h-5 w-5" />
          Food
        </Link>
        <Link href="/search" className={style}>
          <MagnifyingGlassIcon className="h-5 w-5" />
          Search
        </Link>
        <ThemeButton />
        <LoginButton />
      </div>
    </aside>
  );
}
