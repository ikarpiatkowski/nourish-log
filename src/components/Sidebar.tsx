'use client';
import Link from 'next/link';
import LoginButton from './LoginButton';
import ThemeButton from '@/components/ThemeButton';
import {
  HomeIcon,
  ArchiveBoxIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';
export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const style =
    'flex hover:bg-neutral-400 gap-x-2 rounded-xl m-1 px-2 py-1 w-full';
  return (
    <nav
      className={`${
        open ? 'w-48' : 'w-20'
      } duration-300 flex flex-col px-5 items-center bg-neutral-300 dark:bg-neutral-700 rounded-r-xl h-full`}
    >
      <Bars3Icon
        className={`w-6 h-6 hover:bg-neutral-400 rounded-xl m-4`}
        onClick={() => setOpen(!open)}
      />
      <Link href="/dashboard" className={style}>
        <HomeIcon className="h-6 w-6" />
        <p className={`duration-300 ${!open && 'hidden scale-0'}`}>Dashboard</p>
      </Link>
      <div
        className={`cursor-pointer select-none ${style} ${
          openMenu && 'bg-neutral-600 duration-300'
        }`}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <ArchiveBoxIcon className="h-6 w-6" />
        <p className={`duration-300 flex-1 ${!open && 'hidden scale-0'}`}>
          Food
        </p>
        <ChevronDownIcon
          className={`duration-300 h-6 w-6 ${!open && 'hidden scale-0'} ${
            !openMenu && 'rotate-180'
          }`}
        />
      </div>
      {openMenu && open && (
        <>
          <Link href="/test" className={`${style}`}>
            Test
          </Link>
          <Link href="/food" className={`${style}`}>
            Food
          </Link>
        </>
      )}
      <Link href="/search" className={style}>
        <MagnifyingGlassIcon className="h-6 w-6" />
        <p className={`duration-300 ${!open && 'hidden scale-0'}`}>Search</p>
      </Link>
      <Link href="/settings" className={style}>
        <Cog6ToothIcon className="h-6 w-6" />
        <p className={`duration-300 ${!open && 'hidden scale-0'}`}>Settings</p>
      </Link>
      <ThemeButton />
      <LoginButton />
    </nav>
  );
}
