import UserFood from '@components/UserFood';
export const metadata = {
  title: 'Nourish Log - Dashboard',
};
export default function DashboardPage() {
  return (
    <>
      <main className="flex flex-col items-center w-full h-screen bg-gray-900">
        <UserFood />
      </main>
    </>
  );
}
