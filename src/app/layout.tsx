import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from '../app/background/page';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daze",
  description: "Join the waiting list landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Background />
        {children}
        </body>
    </html>
  );
}
