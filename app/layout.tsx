import Sidebar from './Sidebar';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NourishLog',
  description: 'Nutrition-focused food tracker',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
