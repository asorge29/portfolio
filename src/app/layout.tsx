import type { Metadata } from "next";
import {Chakra_Petch} from "next/font/google"
import "../styles/globals.css";
import Cursor from "../components/cursor";
import Navbar from "@/components/navbar";
import CutCorners from "@/components/cutCorners";

export const metadata: Metadata = {
  title: "Andy Sorge - Developer",
  description: "My developer portfolio website :)",

};

const chakraPetch = Chakra_Petch({
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
      <body className={chakraPetch.className}>
        <CutCorners>
          {children}
        </CutCorners>
      </body>
    </html>
  );
}
