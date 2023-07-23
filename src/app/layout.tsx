import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Raleway } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-playfair-display',
});

const raleway = Raleway({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: "What's this word?",
  description: 'A word guessing game',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${raleway.variable}`}>
      <body>{children}</body>
    </html>
  );
}
