'use client';
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
import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';
export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const style =
    'flex hover:bg-indigo-900 gap-x-2 rounded-xl m-1 px-2 py-1 w-full ';
  return (
    <aside>
      <div
        className={`${
          open ? 'w-48 py-2' : 'w-20'
        } duration-300 flex flex-col px-5 items-center bg-indigo-700 rounded-r-xl border-r border-black h-screen`}
      >
        <Bars3Icon
          className="h-6 w-6 m-4 hover:bg-indigo-900 rounded-xl"
          onClick={() => setOpen(!open)}
        />
        <Link
          href="/"
          className={`${
            open ? 'px-2 py-1' : ''
          }hover:bg-indigo-900 gap-x-2 rounded-xl w-full`}
        >
          <Image src={logo} alt="logo" />
        </Link>
        <Link href="/dashboard" className={style}>
          <HomeIcon className="h-6 w-6" />
          <p className={`duration-300 ${!open && 'hidden scale-0'}`}>
            Dashboard
          </p>
        </Link>
        <Link href="/food" className={style}>
          <ArchiveBoxIcon className="h-6 w-6" />
          <p className={`duration-300 ${!open && 'hidden scale-0'}`}>Food</p>
        </Link>
        <Link href="/search" className={style}>
          <MagnifyingGlassIcon className="h-6 w-6" />
          <p className={`duration-300 ${!open && 'hidden scale-0'}`}>Search</p>
        </Link>
        <ThemeButton />
        <LoginButton />
      </div>
    </aside>
  );
}
