import { Analytics } from "@vercel/analytics/react";
import Nav from "@/Components/Nav";
import Footer from "@/Components/Footer";
import "@/styles/globals.css";
import "./firebase.js";
import { AuthContextProvider } from "./context/AuthContext";

export const metadata = {
  title: "Gupta Crockery - Where Quality Meets Savings",
  description: `Business listings of Kitchen Crockery, Crockery Item manufacturers, suppliers and exporters in Chandigarh, रसोई के लिए क्रॉकरी विक्रेता, चंडीगढ़, Chandigarh along with their contact details & address. Find here Kitchen Crockery, Crockery Item, Khurja Crockery suppliers, manufacturers, wholesalers, traders with Kitchen Crockery prices for buying.`,
  // description: `Explore our wide selection of crockery from top brands and get ready to add a touch of elegance to your table.`,
  keywords:
    "Kitchen Crockery, Crockery Item, Khurja Crockery, Crockery, Crockery Items For Restaurant, manufacturers, suppliers, exporters, traders, dealers, manufacturing companies, retailers, producers, Chandigarh, रसोई के लिए क्रॉकरी, चंडीगढ़, Chandigarh, India",
  // keywords: "gupta,crockery,sector 38 west,chandigarh,bartan,utensils,low price,high quality,kitchen,home,appliances",
  canonical: "https://gupta-crockery.vercel.app",
};

import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content="Gupta Crockery" />
        <meta name="geo.region" content="IN-CT" />
        <meta name="geo.placename" content="chandigarh" />
        <meta name="geo.position" content="30.754944;76.739626" />
        <meta name="referrer" content="origin" />
        <meta
          property="og:title"
          content="Gupta Crockery - Where Quality Meets Savings"
        />
        <meta
          property="og:description"
          content="Business listings of Kitchen Crockery, Crockery Item manufacturers, suppliers and exporters in Chandigarh, रसोई के लिए क्रॉकरी विक्रेता, चंडीगढ़, Chandigarh along with their contact details & address. Find here Kitchen Crockery, Crockery Item, Khurja Crockery suppliers, manufacturers, wholesalers, traders with Kitchen Crockery prices for buying."
          // content="Explore our wide selection of crockery from top brands and get ready to add a touch of elegance to your table."
        />
        <meta
          property="og:image"
          content="https://gupta-crockery.vercel.app/static/Logo.png"
        />
        <meta property="og:url" content="https://gupta-crockery.vercel.app" />
        <meta property="og:type" content="website" />
        <meta
          name="google-site-verification"
          content="tt0ugrK-KPSWYsuOU8HhgMVUmLdhgZ-thh3xkbt8Bng"
        />
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
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href={metadata.canonical} />
        <title>{metadata.title}</title>
      </head>
      <body className="relative">
        <AuthContextProvider>
          <Nav />
          <div className="toast-container fixed min-h-[223px] max-h-[223px] mt-1 w-full overflow-hidden z-[10]">
            <Toaster />
          </div>
          {children}
          <Footer />
        </AuthContextProvider>
      </body>
      {process.env.NODE_ENV !== "development" && <Analytics />}
    </html>
  );
}
