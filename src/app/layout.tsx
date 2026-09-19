import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const satoshi = localFont({
  variable: "--font-sans",
  src: [
    { path: "../fonts/Satoshi/Satoshi-Regular.otf", weight: "400", style: "normal" },
    { path: "../fonts/Satoshi/Satoshi-Italic.otf", weight: "400", style: "italic" },
    { path: "../fonts/Satoshi/Satoshi-Medium.otf", weight: "500", style: "normal" },
    { path: "../fonts/Satoshi/Satoshi-Bold.otf", weight: "700", style: "normal" },
  ],
});

const garamond = localFont({
  variable: "--font-serif",
  src: [{ path: "../fonts/Garamond/Garamond Light.ttf", weight: "400", style: "normal" }],
});

const snell = localFont({
  variable: "--font-script",
  src: "../fonts/Snell/Snell-Roundhand-Bold-Script.otf",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Rowen Latif",
  description: "Creative technologist and product designer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${garamond.variable} ${snell.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-900 font-sans">
        <CustomCursor />
        <Nav />
        <div className="pt-20 flex flex-col flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
