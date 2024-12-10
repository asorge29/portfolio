import type { Metadata } from "next";
import {Roboto} from "next/font/google"
import "../styles/globals.css";
import Profile from "@/components/profile";

export const metadata: Metadata = {
  title: "Andy Sorge - Developer",
  description: "My developer portfolio website :)",

};

const roboto = Roboto({
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
      <body className={roboto.className}>
        <Profile />
        {children}
      </body>
    </html>
  );
}
