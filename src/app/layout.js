import { Inter } from "next/font/google";
import "./globals.css";
import Newsletter from "@/components/Newsletter/Newsletter";
import Footer from "@/components/Footer/Footer";
import NextTopLoader from "nextjs-toploader";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  return {
    title: "Design Agency",
    description: "Design Agency - Let's build a awesome work together",
    keywords: "design agency, web agency",
    metadataBase: new URL("https://design-agency-next.vercel.app"),
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en-US",
      },
    },
    openGraph: {
      images: "/Design Agency Let's build a awesome work together.png",
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name={process.env.CONTENT_NAME}
          content={process.env.CONTENT_KEY}
        />
      </Head>
      <body className={inter.className}>
        <NextTopLoader color="#20B15A" showSpinner={false} />
        {children}
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}
