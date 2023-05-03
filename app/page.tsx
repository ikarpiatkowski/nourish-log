"use client"
import { SignInButton, useUser } from "@clerk/nextjs";
export default async function Home() {
  const user = useUser();
  return (
    <>
      <main className="flex flex-col items-center justify-center w-full h-screen">
        Main page
        <div>
          {!user.isSignedIn && <SignInButton />}
        </div>
      </main>
    </>
  );
}
