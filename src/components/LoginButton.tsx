'use client';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';
export default function LoginButton() {
  const user = useUser();
  return (
    <>
      <div className="justify-center items-center flex flex-col mb-5 w-full gap-3">
        {!user.isSignedIn ? (
          <SignInButton />
        ) : (
          user.isSignedIn && (
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
          )
        )}
      </div>
    </>
  );
}
