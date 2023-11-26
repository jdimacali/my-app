import type { Metadata } from "next";
import { Inter, Metal_Mania } from "next/font/google";
import "./globals.css";
import Navbar from "./(dashboard)/components/Navbar";
import Footer from "./(dashboard)/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const metalMania = Metal_Mania({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-metal-mania",
});

export const metadata: Metadata = {
  title: "Gweart",
  description: "Art by G.W.E",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${metalMania.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}