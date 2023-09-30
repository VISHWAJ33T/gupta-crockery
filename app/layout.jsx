import { Analytics } from '@vercel/analytics/react';
import Footer from "@/Components/Footer";
import Nav from "@/Components/Nav";
import "@/styles/globals.css";
import "../firebase.js"
export const metadata = {
  title: "Gupta Crockery",
  description: `Introducing "Gupta Crockery" - Where Quality Meets Savings! Explore stunning crockery that's kind to your wallet. Find beauty and trust in every piece, carefully selected to bring elegance to your table without the hefty price tag. Enjoy luxury for less at Gupta Crockery!`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content="Gupta Crockery" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Ecommerce App" />
        <meta name="format-detection" content="+91-9463916728" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="none" />
        <meta name="msapplication-TileColor" content="#131b2e" />
        <meta name="msapplication-tap-highlight" content="no" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#131b2e" />
      </head>
      <body className="relative">
        <Nav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
