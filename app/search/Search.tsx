'use client';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
export default function Search() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch('');
    router.push(`/search/${search}`);
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        className="bg-black outline-none"
        type="text"
        value={search}
        placeholder="Enter the search term"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="bg-indigo-200 text-indigo-500 font-bold m-4 py-2 px-4 rounded-lg"
      >
        Search
      </button>
    </form>
  );
}
