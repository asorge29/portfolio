import type { Metadata } from "next";
import {Bodoni_Moda} from "next/font/google"
import "../styles/globals.css";
import Cursor from "@/components/cursor";

export const metadata: Metadata = {
  title: "Andy Sorge - Developer",
  description: "My developer portfolio website :)",

};

const BodoniModa = Bodoni_Moda({
  weight: "400",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={BodoniModa.className}>
        {children}
        <Cursor/>
      </body>
    </html>
  );
}
