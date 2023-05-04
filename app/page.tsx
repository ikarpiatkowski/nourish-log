'use client';
import { SignInButton, useUser } from '@clerk/nextjs';
export default async function Home() {
  const user = useUser();
  return (
    <>
      <main className="flex flex-col ml-32 items-center justify-center h-screen">
        Main page
        <div>{!user.isSignedIn && <SignInButton />}</div>
      </main>
    </>
  );
}
