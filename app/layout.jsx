import Footer from "@/Components/Footer";
import Nav from "@/Components/Nav";
import "./globals.css";

export const metadata = {
  title: "Gupta Crockery",
  description: "Gupta Crockery Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
