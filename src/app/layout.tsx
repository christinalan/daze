import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local"

const circularMedium = localFont({
  src: '../fonts/CircularXXTT-Medium.ttf',
  display: 'swap',
})

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
    (<div>Under maintenance</div>)
    // <html lang="en">
    //   <body className={circularMedium.className}>
    //     {/* <Background /> */}
    //     {children}
    //     </body>
    // </html>
  );
}
