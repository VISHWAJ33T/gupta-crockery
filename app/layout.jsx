import Footer from "@/Components/Footer";
import Nav from "@/Components/Nav";
// import "./globals.css";
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
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" /> */}
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
