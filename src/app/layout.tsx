import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const circularMedium = localFont({
    src: "../fonts/CircularXXTT-Medium.ttf",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Daze",
    description: "Daze - Join the waiting list!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head></head>
            <body className={circularMedium.className}>
                {/* <Background /> */}
                {children}
            </body>
        </html>
    );
}
