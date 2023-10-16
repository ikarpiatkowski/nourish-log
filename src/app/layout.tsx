import { Navbar } from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/ModeToggle';
import { PremiumAlertDialog } from '@/components/PremiumAlertDialog';
import Link from 'next/link';
import { ClerkProvider } from '@clerk/nextjs/app-beta';
import LoginButton from '@/components/LoginButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nourish Log',
  description: 'Eat like a pro',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={`${inter.className} dark:bg-slate-900 bg-slate-200`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <nav className="flex items-center justify-between p-6 py-4 dark:bg-slate-800 bg-slate-100 border-t-4 border-t-primary">
              <Link href="/">
                <h1 className="font-semibold tracking-tighter text-2xl bg-gradient-to-r from-indigo-500 via-green-500 to-red-500 inline-block text-transparent bg-clip-text">
                  Nourish Log
                </h1>
              </Link>
              <Navbar />
              <div className="flex gap-3 items-center">
                <ModeToggle />
                <PremiumAlertDialog />
                <LoginButton />
              </div>
            </nav>
            {children}
          </ThemeProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
