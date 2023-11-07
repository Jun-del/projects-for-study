import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";
import ModalProvider from "@/providers/modal-provider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Ecommerce store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
