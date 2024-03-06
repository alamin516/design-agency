import { Inter } from "next/font/google";
import "./globals.css";
import Newsletter from "@/components/Newsletter/Newsletter";
import Footer from "@/components/Footer/Footer";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(){
  return{
      title: "Design Agency",
      description: "Design Agency - Let's build a awesome work together",
      keywords: "design agency, web agency",
      openGraph: {
          images: "/Design Agency Let's build a awesome work together.png",
      },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader
        color="#20B15A"
        showSpinner={false}
        />
        {children}
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}
