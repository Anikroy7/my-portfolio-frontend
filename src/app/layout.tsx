import "@/src/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import { Providers } from "../libs/providers";

import { siteConfig } from "@/src/config/site";

const roboto = Inter({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "https://i.ibb.co.com/XWhj4vF/DALL-E-2024-12-31-00-23-47-A-professional-and-creative-logo-for-a-software-engineer-named-Anik-Roy-T.webp",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={roboto.className}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
