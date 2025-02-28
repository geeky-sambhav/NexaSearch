import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import PlausibleProvider from "next-plausible";
import "./globals.css";

const inter = Lexend({ subsets: ["latin"] });

let title = "Nexa Search – Unlock the Universe of Knowledge";
let description =
  "Unlock the Universe of Knowledge";
let url = "https://nexasearch-three.vercel.app/";
let ogimage = "../public/favicon.png";
let sitename = "https://nexasearch-three.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: "./favicon/favicon.ico",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: url,
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <PlausibleProvider domain="nexasearch-three.vercel.app/" />
      </head>
      <body
        className={`${inter.className} flex min-h-screen flex-col justify-between bg-dark-bg-primary text-dark-text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
