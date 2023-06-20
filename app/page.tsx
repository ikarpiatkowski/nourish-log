import Link from 'next/link';
export default async function Home() {
  return (
    <>
      <main className="bg-gray-900 h-screen text-center">
        <p className="pt-10 text-7xl underline decoration-indigo-500">
          Nourish Log
        </p>
        <p className="py-6 text-2xl underline decoration-sky-500">
          Your personal food tracker!
        </p>
        <p className="py-6 text-xl ">List of Features:</p>
        <ul>
          <li>
            Search food nutritions (
            <Link className="text-neutral-500" href={'https://nextjs.org'}>
              Next.js
            </Link>
            )
          </li>
          <li>
            Login with github account (
            <Link className="text-indigo-500" href={'https://clerk.com'}>
              Clerk
            </Link>
            )
          </li>
          <li>
            Loading states and errors for components (
            <Link className="text-blue-500" href={'https://react.dev'}>
              React
            </Link>
            )
          </li>
          <li>
            Database connection and configuration (
            <Link className="text-green-500" href={'https://supabase.com'}>
              Supabase
            </Link>
            )
          </li>
          <li>
            Managing UI with 3rd party libraries (
            <Link className="text-sky-500" href={'https://tailwindcss.com'}>
              TailwindCSS
            </Link>
            )
          </li>
        </ul>
      </main>
    </>
  );
}
