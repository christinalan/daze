import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import VideoLayout from "./VideoLayout"; 

export const circularMedium = localFont({
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
            <body>
                <VideoLayout>{children}</VideoLayout>
                {/* {children} */}
            </body>
        </html>
    );
}


// className={circularMedium.className}