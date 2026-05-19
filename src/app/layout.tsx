import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "B2SEW — Premium auto parts for heavy machinery",
    template: "%s · B2SEW",
  },
  description:
    "OEM-grade heavy machinery parts, reliable logistics, and technical support for fleets and rebuilders.",
  openGraph: {
    title: "B2SEW — Premium auto parts for heavy machinery",
    description:
      "Reliability and operational continuity for professionals worldwide.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c1528",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} bg-background font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
