'use client';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
export default function Search() {
  const style =
    'flex text-black rounded-xl gap-x-2 m-1 px-2 py-1 dark:text-white bg-neutral-400 dark:bg-neutral-700 items-center';
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
        <Input
          type="text"
          placeholder="Search for food"
          value={search}
          className="w-60"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button type="submit" className="">
          <MagnifyingGlassIcon className="h-5 w-5" />
          Search
        </Button>
      </div>
    </form>
  );
}
