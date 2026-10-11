
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tomas | Software Developer",
  description:
    "Personal portfolio showcasing my projects, skills, and experience as a software developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} flex min-h-screen flex-col antialiased`}>
        <Navbar />

        <div className="flex-1">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
