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


// export async function fetchData() {
//   try {
//     const res = await fetch('http://20.29.41.168:8000/api/authorize/login', {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify({
//         "email": "devs@dexfreight.io",
//         "password": "JD7C46s63.7tHcc"
//       })
//     });

//     const data = await res.json();
//     return data;
//   } catch (e) {
//     console.log(e)
//   }
// }