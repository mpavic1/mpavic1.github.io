import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mario Pavic — Head of Product",
  description:
    "Product leader with 12+ years spanning engineering, program management, and product leadership. Building at the intersection of AI and product management.",
  openGraph: {
    title: "Mario Pavic — Head of Product",
    description:
      "Product leader building AI-powered products. 2M+ users served, award-winning PM.",
    type: "website",
    url: "https://mpavic1.github.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mario Pavic — Head of Product",
    description:
      "Product leader building AI-powered products. 2M+ users served, award-winning PM.",
  },
  alternates: {
    canonical: "https://mpavic1.github.io/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans min-h-screen bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
