import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sohan Chandra Pani | Web Developer",
    template: "%s | Sohan Chandra Pani",
  },

  description:
    "Portfolio of Sohan Chandra Pani, a web developer building modern, responsive websites and web applications with React, Next.js, JavaScript, PHP and Laravel.",

  keywords: [
    "Sohan Chandra Pani",
    "Web Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "PHP Developer",
    "Laravel Developer",
    "Portfolio",
  ],

  authors: [
    {
      name: "Sohan Chandra Pani",
    },
  ],

  creator: "Sohan Chandra Pani",

  openGraph: {
    title: "Sohan Chandra Pani | Web Developer",
    description:
      "Web developer building modern, responsive and practical digital experiences.",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#050505] text-white">
        {children}
      </body>
    </html>
  );
}