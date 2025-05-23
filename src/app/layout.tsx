import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const hornbill = localFont({
  src: [
    {
      path: "../../public/fonts/HornbilltrialBold-lgr8X.otf",
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-hornbill',
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hornbill.variable}`}>
      <body
        className={`bg-[#F0F8FF] ${geistSans.variable} ${geistMono.variable} antialiased font-hornbill`}
      >
        {children}
      </body>
    </html>
  );
}
