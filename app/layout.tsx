import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import PlausibleProvider from "next-plausible";
import "./globals.css";

const inter = Lexend({ subsets: ["latin"] });

let title = "Turbo Seek – AI Search Engine";
let description =
  "Search smarter and faster with our open source AI search engine";
let url = "https://nexasearch.io/";
let ogimage = "https://nexasearch.io/og-image.png";
let sitename = "nexasearch.io";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: "/favicon.ico",
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
        <PlausibleProvider domain="nexasearch.io" />
      </head>
      <body
        className={`${inter.className} flex min-h-screen flex-col justify-between bg-dark-bg-primary text-dark-text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
