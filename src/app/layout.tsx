import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Import your Header component here
import Header from "@/components/Header/Header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Krishna Finance | Empowering Your Future",
    description: "Professional financial services and consulting.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {/* The Header is placed here so it appears on every page */}
        <Header />

        <main>
            {children}
        </main>

        {/* You can add a Footer component here later */}
        </body>
        </html>
    );
}