import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "@/Components/Navbar/Nav.jsx";
import Footer from "@/Components/Footer";
import "@/styles/globals.css";
import "./firebase.js";
import { AuthContextProvider } from "./context/AuthContext";
import Script from "next/script";
export const metadata = {
  title: "Gupta Crockery - Where Quality Meets Savings",
  description: `Discover a wide range of kitchen crockery and cookware at Gupta Crockery. Browse through top-quality products from leading manufacturers in Chandigarh. Find the perfect balance between quality and savings with our extensive selection of kitchen essentials. Business listings of Kitchen Crockery, Crockery Item sellers in Chandigarh, रसोई के लिए क्रॉकरी विक्रेता, चंडीगढ़, Chandigarh. Find here Kitchen Crockery, Crockery Item, traders with Kitchen Crockery prices for buying.`,
  keywords:
    "Kitchen Crockery, Crockery Item, Gupta Crockery, Crockery, Crockery Items For Home, Crockery Items For Restaurant, suppliers, traders, retailers, Chandigarh, रसोई के लिए क्रॉकरी, चंडीगढ़, Sector 38, Sector 38 West, sector, Chandigarh, India",
  canonical: "https://gupta-crockery.vercel.app",
};

import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        {process.env.NODE_ENV !== "development" && (
          <>
            <Script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-DXT8NJXWDH"
            ></Script>
            <Script>
              {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DXT8NJXWDH');`}
            </Script>
          </>
        )}
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
          content="Discover a wide range of kitchen crockery and cookware at Gupta Crockery. Browse through top-quality products from leading manufacturers in Chandigarh. Find the perfect balance between quality and savings with our extensive selection of kitchen essentials. Business listings of Kitchen Crockery, Crockery Item sellers in Chandigarh, रसोई के लिए क्रॉकरी विक्रेता, चंडीगढ़, Chandigarh. Find here Kitchen Crockery, Crockery Item, traders with Kitchen Crockery prices for buying."
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
      </head>
      <body className="relative select-none">
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
      {process.env.NODE_ENV !== "development" && <SpeedInsights />}
    </html>
  );
}
