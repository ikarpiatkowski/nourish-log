import './globals.css';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs/app-beta';
import Sidebar from '@components/Sidebar';
import { Metadata } from 'next';
const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Nourish Log',
  description: 'Nutrition-focused food tracker',
  keywords: 'nutrition, food, tracker',
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
          <div className="flex-grow">{children}</div>
        </body>
      </ClerkProvider>
    </html>
  );
}
