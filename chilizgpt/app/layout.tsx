import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "ChilizGPT 🤖 - AI-Powered Sports Analytics ✨",
  description:
    "ChilizGPT is an Smart AI chatbot trained on Chiliz Blockchain and its ecosystem data to help community and developers understand Chiliz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
