import { Label } from '@/components/ui/label';

export default function Home() {
  return (
    <main className="text-center flex flex-col max-w-lg p-6 mx-auto py-6">
      <Label
        htmlFor="header"
        className="text-7xl underline decoration-primary bg-gradient-to-r from-indigo-500 via-green-500 to-red-500 inline-block text-transparent bg-clip-text"
      >
        Nourish Log
      </Label>
      <br />
      <Label
        htmlFor="mainContent"
        className="py-6 text-2xl underline bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500 inline-block text-transparent bg-clip-text"
      >
        Your personal food tracker!
      </Label>
    </main>
  );
}
