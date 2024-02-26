import { Inter } from "next/font/google";
import "./globals.css";
import Newsletter from "@/components/Newsletter/Newsletter";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Design Agency",
  description: "Let's build a awesome work together",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Newsletter/>
        <Footer/>
      </body>
    </html>
  );
}
