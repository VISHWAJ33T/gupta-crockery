import { Analytics } from '@vercel/analytics/react';
import Footer from "@/Components/Footer";
import Nav from "@/Components/Nav";
import "@/styles/globals.css";

export const metadata = {
  title: "Gupta Crockery",
  description: "Gupta Crockery Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
