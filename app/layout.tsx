import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
// import { Source_Code_Pro } from 'next/font/google';

// const sourceCodePro = Source_Code_Pro({
//   subsets: ['latin'],
//   variable: '--font-smooch-sans',
// });


export const metadata: Metadata = {
  title: "Egylet",
  description: "Hivatalos egylet weboldal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{backgroundImage:"url(../../cardBack3.jpg)",backgroundRepeat: "repeat" ,fontFamily:"SourcePro"}}
        className={`font-sourcePro antialiased overflow-x-hidden flex flex-col items-center bg-cover`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
