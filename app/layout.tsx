import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import { MainNav } from "./(site)/components/MainNav";
import { SiteFooter } from "./(site)/components/SiteFooter";
import { ChatWidgetPlaceholder } from "./(site)/components/ChatWidgetPlaceholder";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Nycayen Moore Hair Artistry",
  description: "Luxury hair styling and wig artistry in New York City.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased selection:bg-primary/30 selection:text-primary-foreground">
        <MainNav />
        <main className="min-h-screen">
          {children}
        </main>
        <SiteFooter />
        <ChatWidgetPlaceholder />
      </body>
    </html>
  );
}
