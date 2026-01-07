"use client"; // Required if adding motion directly to the layout file
import { motion, AnimatePresence } from "framer-motion";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// Note: Metadata cannot be exported from a Client Component. 
// If you need SEO metadata, move the motion logic inside the Footer component 
// instead of adding it here, or use a separate Client Wrapper.

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
            >
                <Header />

                <main className="flex-grow">
                    {children}
                </main>

                {/* Wrapping the Footer in a motion div for scroll entrance */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Footer />
                </motion.div>
            </body>
        </html>
    );
}