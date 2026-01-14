import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/context/Theme";
import Navbar from "@/components/ui/navigation/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DevFlow",
  description:
    "A commmunity-driven platform for asking and answering programming questions. Get help, share" +
    "knowledge, and colaborate with developers from around the world. Explore topics in web" +
    "development, mobile app development, algorithms, data structures, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange={true}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
