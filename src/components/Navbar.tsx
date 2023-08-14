import Link from 'next/link';
import { AlertDialogPremium } from './AlertDialog';
import logo from '@/public/logo.png';
import Image from 'next/image';
export default function Navbar() {
  return (
    <div className="flex m-2 p-2 duration-300 bg-neutral-300 dark:bg-neutral-700 h-14 items-center justify-between rounded-lg">
      <Link href="/" className="flex items-center">
        <Image src={logo} alt="logo" width={40} height={40} />
        Nourish Log
      </Link>
      <AlertDialogPremium />
    </div>
  );
}
