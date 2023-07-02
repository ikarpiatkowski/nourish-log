import Search from '@components/Search';
export const metadata = {
  title: 'Nourish Log - Search',
};
export default function SearchPage() {
  return (
    <>
      <main className="flex flex-col items-center w-full h-screen">
        <Search />
      </main>
    </>
  );
}
