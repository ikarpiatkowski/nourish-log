'use client'
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { ImageView } from './ImageView';
export default function Sidebar() {
  const user = useUser();
  return (
    <>
      <div className="flex flex-col p-5 items-start bg-indigo-700 h-screen fixed">
        <Link
          href="/"
          className="m-1 px-2 py-1 bg-indigo-400 text-indigo-700 font-bold rounded-lg"
        >
          Home
        </Link>
        <Link
          href="/food"
          className="m-1 px-2 py-1 bg-indigo-400 text-indigo-700 font-bold rounded-lg"
        >
          Food
        </Link>
        <Link
          href="/account"
          className="m-1 px-2 py-1 bg-indigo-400 text-indigo-700 font-bold rounded-lg"
        >
          Account
        </Link>
        {user.isSignedIn && <ImageView/>}
      </div>
    </>
  );
}