import Sidebar from '../components/Sidebar';
import '@styles/globals.css';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs/app-beta';
import { ScrollArea } from '@components/ui/scroll-area';
const inter = Inter({ subsets: ['latin'] });
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
    <html lang="en">
      <ClerkProvider>
        <body className={`flex ${inter.className}`}>
          <Sidebar />
          <div className="flex-grow">
            <ScrollArea className="h-screen">{children}</ScrollArea>
          </div>
        </body>
      </ClerkProvider>
    </html>
  );
}
