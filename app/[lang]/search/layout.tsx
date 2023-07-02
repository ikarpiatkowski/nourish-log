export const metadata = {
  title: 'Nourish Log',
  description: 'Nutrition-focused food tracker',
};
export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center w-full h-screen">
      {children}
    </main>
  );
}
