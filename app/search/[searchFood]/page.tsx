import { Suspense } from 'react';
import SearchNinja from '../../components/SearchNinja';
import { LoadingSpinner } from '@/app/components/loading';

export default function SearchFood({
  params: { searchFood },
}: SearchPageProps) {
  return (
    <>
      <main className="flex flex-col ml-32 items-center justify-center h-screen">
        Food
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
