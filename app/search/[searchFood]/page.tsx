import { Suspense } from 'react';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import Search from '@components/Search';
import SearchNinja from '@components/SearchNinja';
export const metadata = {
  title: 'Nourish Log - Search food',
};
export default function SearchFoodPage({
  params: { searchFood },
}: SearchPageProps) {
  return (
    <>
      <Search />
      <main className="flex flex-row flex-wrap items-center justify-center w-full h-screen bg-gray-900">
        <Suspense fallback={<LoadingSpinner size={20} />}>
          {/* @ts-ignore */}
          <SearchNinja params={{ searchFood }} />
        </Suspense>
      </main>
    </>
  );
}
