import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.png';
import LoginButton from './LoginButton';
export default function Sidebar() {
  return (
    <aside>
      <div className="flex flex-col p-5 items-start bg-indigo-700 w-32 h-screen">
        <Link
          href="/"
          className="m-1 px-2 py-1 text-indigo-700 font-bold rounded-lg"
        >
          <Image src={logo} alt="logo" />
        </Link>
        <Link
          href="/food"
          className="m-1 px-2 py-1 bg-indigo-400 text-indigo-700 font-bold rounded-lg"
        >
          Food
        </Link>
        <Link
          href="/search"
          className="m-1 px-2 py-1 bg-indigo-400 text-indigo-700 font-bold rounded-lg"
        >
          Search
        </Link>
        <Link
          href="/account"
          className="m-1 px-2 py-1 bg-indigo-400 text-indigo-700 font-bold rounded-lg"
        >
          Account
        </Link>
        <LoginButton />
      </div>
    </aside>
  );
}
