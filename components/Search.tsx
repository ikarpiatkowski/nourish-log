'use client';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
export default function Search() {
  const style = 'flex text-black rounded-xl m-1 px-2 py-1 bg-indigo-200';
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch('');
    router.push(`/search/${search}`);
  };
  return (
    <form onSubmit={handleSearch} className="w-full p-10">
      <div className="flex justify-center">
        <input
          className="dark:bg-[#1c1b22] dark:placeholder:text-white placeholder:text-black outline-none"
          type="text"
          value={search}
          placeholder="Enter the search term"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className={style} type="submit">
          <MagnifyingGlassIcon className="h-5 w-5" />
          Search
        </button>
      </div>
    </form>
  );
}
