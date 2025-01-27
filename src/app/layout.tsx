import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Raleway } from "next/font/google";
import { Button } from "./components/Button";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair-display",
});

const raleway = Raleway({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "What's this word?",
  description: "A word guessing game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${raleway.variable} flex min-h-screen flex-col items-center justify-between px-24 py-12 bg-orange-50`}
    >
      <body className="flex align-middle items-center flex-col w-full h-[80vh]">
        <Button onClick={() => {}}>BGM</Button>
        <div className="flex flex-1 flex-col items-center justify-center w-full h-full bg-orange-400 border-black border-4 rounded-[4rem]">
          {children}
        </div>
      </body>
    </html>
  );
}
