import { Suspense } from 'react';
import SearchNinja from '../../../components/SearchNinja';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import Search from '@components/Search';

export default function SearchFoodPage({
  params: { searchFood },
}: SearchPageProps) {
  return (
    <>
      <Search />
      <main className="flex flex-col items-center justify-center w-full h-screen bg-gray-900">
        <Suspense fallback={<LoadingSpinner size={20} />}>
          {/* @ts-ignore */}
          <SearchNinja params={{ searchFood }} />
        </Suspense>
      </main>
      {/* <main className="flex flex-col items-center justify-center w-full h-screen">
        <div>Search</div>
        <div>Results</div>
      </main> */}
    </>
  );
}
