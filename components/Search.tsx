'use client';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
export default function Search() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch('');
    router.push(`/search/${search}`);
  };
  const buttonClass = `m-1 px-2 py-1 bg-indigo-600 ${buttonVariants({
    variant: 'outline',
  })}`;
  return (
    <form onSubmit={handleSearch} className="bg-gray-900 w-full p-10">
      <div className="flex justify-center">
        <input
          className="bg-gray-900 outline-none"
          type="text"
          value={search}
          placeholder="Enter the search term"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button type="submit" className={buttonClass}>
          Search
        </Button>
      </div>
    </form>
  );
}
