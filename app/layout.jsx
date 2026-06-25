import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Load Inter with the weights we need
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Why People Buy — Marketing Intelligence Lab",
  description:
    "A marketing intelligence lab exploring why people choose, love, and stay with brands. Brand breakdowns through consumer psychology, market strategy, and growth logic.",
  keywords: [
    "marketing",
    "consumer psychology",
    "brand strategy",
    "market research",
    "growth marketing",
  ],
  openGraph: {
    title: "Why People Buy",
    description: "A marketing intelligence lab exploring brand strategy and consumer psychology.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-foreground font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
