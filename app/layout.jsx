import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import FontAwesomeConfig from "./Fontawesome";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio Page",
  description: "Created by Suffnux",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/fav.ico" />
        <FontAwesomeConfig />
             </head>
      <body
      
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full `}
      >
        {children}
      </body>
 
    </html>
  );
}
