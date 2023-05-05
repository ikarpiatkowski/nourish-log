'use client';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { ImageView } from './ImageView';
import Image from 'next/image';
import logo from '../public/logo.png';
export default function Sidebar() {
  const user = useUser();
  return (
    <>
      <div className="flex flex-col p-5 items-start bg-indigo-700 w-32 h-screen fixed">
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
        {user.isSignedIn && <ImageView />}
      </div>
    </>
  );
}