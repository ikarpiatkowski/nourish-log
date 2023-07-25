import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h2>Not Found</h2>
      <p>
        <Link className="underline decoration-indigo-500" href="/">
          Go to home page
        </Link>
      </p>
    </div>
  );
}
