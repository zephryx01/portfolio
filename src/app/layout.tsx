// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import ClientLayout from './client-layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Zephryx | Ethical Hacker & Security Researcher',
  description: 'Portfolio of Zephry, a certified ethical hacker and security professional specializing in penetration testing and vulnerability assessment.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-gray-200`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}