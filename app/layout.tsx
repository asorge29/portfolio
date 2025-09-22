import type { Metadata } from "next";
import { Caprasimo, Montserrat } from "next/font/google";
import "./globals.css";

const caprasimo = Caprasimo({
  variable: "--font-corben",
  subsets: ["latin"],
  weight: ["400"]
})

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400"],
})

export const metadata: Metadata = {
  title: "Andy Sorge - Developer",
  description: "My personal portfolio website :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${caprasimo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
