import UserFood from '@components/UserFood';
export const metadata = {
  title: 'Nourish Log - Dashboard',
};
export default function DashboardPage() {
  return (
    <>
      <main className="flex flex-col flex-wrap items-center h-screen">
        <UserFood />
      </main>
    </>
  );
}
