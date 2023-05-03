import { UserButton } from "@clerk/nextjs";

export const ImageView = () => {
    return (<div className="justify-center items-center flex flex-col mb-5 w-full gap-3 mt-auto">
    <UserButton appearance={{
      elements: {
        userButtonAvatarBox: {
          width: 56,
          height: 56
        }
      }
    }} /></div>);
  }