'use client';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';
export default function LoginButton() {
  const user = useUser();
  return (
    <>
      <div className="justify-center items-center">
        {!user.isSignedIn ? (
          <SignInButton />
        ) : (
          user.isSignedIn && (
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: {
                    width: 40,
                    height: 40,
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
