import Sidebar from '../components/Sidebar';
import '@styles/globals.css';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs/app-beta';
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
        <body className={`${inter.className}`}>
          <Sidebar />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
