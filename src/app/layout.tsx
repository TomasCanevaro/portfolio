
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tomas-dev-portfolio.vercel.app/"),
  title: {
    default: "Tomas | Software Developer",
    template: "%s | Tomas",
  },
  description:
    "Portfolio of Tomas, a software developer building modern web applications with Go, Python, React, Next.js, and PostgreSQL.",
  keywords: [
    "Tomas",
    "Software Developer",
    "Full Stack Developer",
    "Go",
    "Python",
    "React",
    "Next.js",
    "Portfolio",
  ],
  openGraph: {
    title: "Tomas | Software Developer",
    description:
      "Explore my projects, technical skills, and experience building modern web applications.",
    type: "website",
  },
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
