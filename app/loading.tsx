import { LoadingSpinner } from '@components/LoadingSpinner';
export default function Loading() {
  return (
    <div className="flex bg-gray-900 h-screen justify-center items-center">
      <LoadingSpinner size={20} />
    </div>
  );
}
