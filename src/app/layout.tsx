import type { Metadata } from "next";
import {Itim} from "next/font/google"
import "../styles/globals.css";
import Profile from "@/components/profile";

export const metadata: Metadata = {
  title: "Andy Sorge - Developer",
  description: "My developer portfolio website :)",

};

const itim = Itim({
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
      <body className={itim.className}>
        <Profile />
        {children}
      </body>
    </html>
  );
}
