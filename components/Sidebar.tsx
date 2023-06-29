import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.png';
import LoginButton from './LoginButton';
import ThemeButton from '@components/ThemeButton';
export default function Sidebar() {
  const style = 'text-black rounded-xl m-1 px-2 py-1 bg-indigo-200';
  return (
    <aside>
      <div className="flex flex-col p-5 items-start bg-indigo-700 w-36 h-screen">
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <Link href="/dashboard" className={style}>
          Dashboard
        </Link>
        <Link href="/food" className={style}>
          Food
        </Link>
        <Link href="/search" className={style}>
          Search
        </Link>
        <ThemeButton />
        <LoginButton />
      </div>
    </aside>
  );
}
