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
    <form onSubmit={handleSearch} className="bg-gray-900 w-full">
      <div className="flex justify-center">
        <input
          className="bg-gray-900 outline-none"
          type="text"
          value={search}
          placeholder="Enter the search term"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="bg-gray-400 text-gray-900 font-bold m-4 py-2 px-4 rounded-lg"
        >
          Search
        </button>
      </div>
    </form>
  );
}
