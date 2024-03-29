import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/nav-bar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content="Description" />
      <meta name="keywords" content="Keywords" />
      <title>Workout</title>

      <link rel="manifest" href="/manifest.json" />
      <link href="/icons/icon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
      <link href="/icons/icon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
      <meta name="theme-color" content="#24272C" />
      <body className={inter.className + " bg-background py-6"}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
