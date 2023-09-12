import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = localFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export const metadata: Metadata = {
  title: "PBKK Study Materials",
  description: "Study materials for PBKK",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <body className="w-full h-screen flex items-center justify-center font-sans text-zinc-900 overflow-hidden">
        {children}
      </body>
    </html>
  );
}
