import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar3 from "@/components/Navbar3";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kinky Store",
  description: "A kinky store for all your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <Navbar3 />
        <>{children}</>
        <Footer />
      </body>
    </html>
  );
}
