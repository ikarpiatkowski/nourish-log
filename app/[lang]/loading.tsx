import { LoadingSpinner } from '@components/LoadingSpinner';
export default function Loading() {
  return (
    <div className="flex flex-grow h-full justify-center items-center">
      <LoadingSpinner size={20} />
    </div>
  );
}
