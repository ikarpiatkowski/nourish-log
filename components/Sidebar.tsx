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
  ChevronDownIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';
export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const style =
    'flex hover:bg-neutral-400 gap-x-2 rounded-xl m-1 px-2 py-1 w-full ';
  return (
    <aside>
      <div
        className={`${
          open ? 'w-48 py-2' : 'w-20'
        }  duration-300 flex flex-col px-5 items-center bg-neutral-300 dark:bg-neutral-700 rounded-r-xl h-full`}
      >
        <Bars3Icon
          className={`${style} h-6 w-6 m-4`}
          onClick={() => setOpen(!open)}
        />
        <Link href="/" className={`${open ? 'px-2 py-1' : ''}${style}`}>
          <Image src={logo} alt="logo" />
        </Link>
        <Link href="/dashboard" className={style}>
          <HomeIcon className="h-6 w-6" />
          <p className={`duration-300 ${!open && 'hidden scale-0'}`}>
            Dashboard
          </p>
        </Link>
        <div
          className={`cursor-pointer select-none ${style}`}
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
            <Link href="/food/demo" className={`${style}`}>
              Demo
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
          <p className={`duration-300 ${!open && 'hidden scale-0'}`}>
            Settings
          </p>
        </Link>
        <ThemeButton />
        <LoginButton />
      </div>
    </aside>
  );
}
