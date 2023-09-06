import { Analytics } from '@vercel/analytics/react';
import Footer from "@/Components/Footer";
import Nav from "@/Components/Nav";
import "@/styles/globals.css";
import NewRelic from "./NewRelic.js"
export const metadata = {
  title: "Gupta Crockery",
  description: `Introducing "Gupta Crockery" – Where Quality Meets Savings! Explore stunning crockery that's kind to your wallet. Find beauty and trust in every piece, carefully selected to bring elegance to your table without the hefty price tag. Enjoy luxury for less at Gupta Crockery!`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- link manifest.json --> */}
        <link rel="manifest" href="/manifest.json" />
        {/* <!-- this sets the color of url bar  --> */}
        <meta name="theme-color" content="#131b2e" />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <Analytics />
        <NewRelic />
      </body>
    </html>
  );
}
