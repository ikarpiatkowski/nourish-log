import Search from '../../components/Search';

export const metadata = {
  title: 'Nourish Log',
  description: 'Nutrition-focused food tracker',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center w-full h-screen">
      <Search />
      {children}
    </main>
  );
}
