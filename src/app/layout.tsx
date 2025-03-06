import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { ClerkProvider } from '@clerk/nextjs';
import { Roboto} from 'next/font/google'
import Footer from "./components/Footer/Footer";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "eLearning",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning className={roboto.className}>
        <body className="">
          <Navbar />
          {children}
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}