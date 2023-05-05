'use client';
import { SignInButton, useUser } from '@clerk/nextjs';
import SearchResult from './search/[searchFood]/page';
import { Suspense } from 'react';
export default async function Home() {
  const user = useUser();
  return (
    <>
      <main className="flex flex-col ml-32 items-center justify-center h-screen">
        Main page
        <div>{!user.isSignedIn && <SignInButton />}</div>
        <Suspense fallback={<p className="text-red-500">Loading food...</p>}>
          {/* @ts-ignore */}
          <SearchResult params={{ searchFood: 'pizza' }} />
        </Suspense>
      </main>
    </>
  );
}
