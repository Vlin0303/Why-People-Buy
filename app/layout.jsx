import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Why People Buy — Marketing Intelligence Lab",
  description:
    "Decoding the psychology behind consumer decisions. Analyzing brands, campaigns, and cultural phenomena across China and North America.",
  keywords: ["marketing", "consumer psychology", "brand strategy", "China market", "growth marketing"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-foreground font-sans antialiased">
        <Providers>
          <Navbar />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
