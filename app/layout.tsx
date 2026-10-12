import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers";
import {
  FloatingWhatsApp,
  SiteFooter,
  SiteHeader,
} from "@/shared/components/layout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "5Points Electric Technology — EV Charging & Clean Energy in Nigeria",
  description:
    "5Points Electric Technology Limited makes electric mobility more accessible in Nigeria through EV charging, electric vehicles, AC & DC charging cables, and solar energy solutions.",
};

const themeInitScript = `try{var t=localStorage.getItem("5points-theme");if(t==="dark")document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <Providers>
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
          <FloatingWhatsApp />
        </Providers>
      </body>
    </html>
  );
}
