import './globals.css';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs/app-beta';
import Sidebar from '@components/Sidebar';
import { Metadata } from 'next';
import Providers from '@components/providers';
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
    <html lang="en" className="h-full dark" style={{ colorScheme: 'dark' }}>
      <ClerkProvider>
        <body className={`flex h-full ${inter.className}`}>
          <Providers>
            <Sidebar />
            {children}
          </Providers>
        </body>
      </ClerkProvider>
    </html>
  );
}
