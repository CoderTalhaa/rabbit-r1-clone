import { Cormorant_Upright, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const cormorant_Upright = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant_upright",
});

const opan_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open_sans",
});

export const metadata = {
  title: "Rabbit R1",
  description: "created by Talha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorant_Upright.variable} ${opan_sans.variable}  `}>
        <Header />
        {children}
      </body>
    </html>
  );
}
