'use client';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';
export default function LoginButton() {
  const user = useUser();
  return (
    <>
      {!user.isSignedIn && (
        <div className="justify-center items-center flex flex-col mb-5 w-full gap-3 mt-auto">
          <SignInButton />
        </div>
      )}
      {user.isSignedIn && (
        <div className="justify-center items-center flex flex-col mb-5 w-full gap-3 mt-auto">
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: {
                  width: 56,
                  height: 56,
                },
              },
            }}
          />
        </div>
      )}
    </>
  );
}
