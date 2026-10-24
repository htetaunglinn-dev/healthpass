import type { Metadata } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import AuthModalWrapper from "@/components/AuthModalWrapper";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "HealthPass - Your Personal Healthcare Concierge",
  description: "Premium healthcare coordination service with priority scheduling, dedicated support, and comprehensive health management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${newsreader.variable}`}>
      <body className="antialiased">
        <AuthProvider>
          {children}
          <AuthModalWrapper />
        </AuthProvider>
      </body>
    </html>
  );
}
