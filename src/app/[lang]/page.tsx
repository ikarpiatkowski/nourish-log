import { dictionary } from '@/content';
import Link from 'next/link';
export default function Home({ params }: { params: { lang: string } }) {
  return (
    <>
      <main className="h-full text-center flex-grow">
        <p className="pt-10 text-7xl underline decoration-indigo-500">
          {dictionary[params.lang]?.homeHeader}
        </p>
        <p className="py-6 text-2xl underline decoration-sky-500">
          {dictionary[params.lang]?.homeContent}
        </p>
        <p className="py-6 text-xl ">{dictionary[params.lang]?.aboutHeader}</p>
        <ul>
          <li>
            {dictionary[params.lang]?.aboutNext} (
            <Link className="text-neutral-500" href={'https://nextjs.org'}>
              Next.js
            </Link>
            )
          </li>
          <li>
            {dictionary[params.lang]?.aboutClerk} (
            <Link className="text-indigo-500" href={'https://clerk.com'}>
              Clerk
            </Link>
            )
          </li>
          <li>
            {dictionary[params.lang]?.aboutReact} (
            <Link className="text-blue-500" href={'https://react.dev'}>
              React
            </Link>
            )
          </li>
          <li>
            {dictionary[params.lang]?.aboutSupabase} (
            <Link className="text-green-500" href={'https://supabase.com'}>
              Supabase
            </Link>
            )
          </li>
          <li>
            {dictionary[params.lang]?.aboutTailwind} (
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
