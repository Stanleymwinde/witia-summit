import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import Footer from "@/components/ui/Home/Footer";
import TopNav from "@/components/ui/Top-Nav";

export const metadata: Metadata = {
  title: "Witia Summit",
  description: "Generated by Witia Summit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <TopNav />
        <body>{children}</body>
        <Footer />
      </Provider>
    </html>
  );
}
