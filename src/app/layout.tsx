import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import "./globals.css";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hutchison Port",
  description: "HPI",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const data = await fetchData();
  // console.log(data)
  return (
    <html lang="en">
      <body className={mont.className + " bg-hpi-light-bg"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}