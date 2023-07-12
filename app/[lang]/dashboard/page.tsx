import UserFood from '@components/UserFood';
export const metadata = {
  title: 'Nourish Log - Dashboard',
};
export default function DashboardPage() {
  return (
    <>
      <main className="flex flex-col items-center h-full">
        <UserFood />
      </main>
    </>
  );
}
