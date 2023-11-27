import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import CartProvider from "@/contexts/ContextCart";

const saira = Saira({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Ecommerce cappuccino",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <Header />
        <main className="bg-[#9595951A]/10">
          <CartProvider>{children}</CartProvider>
        </main>
      </body>
    </html>
  );
}
