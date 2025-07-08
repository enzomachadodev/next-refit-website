import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Refit",
  description:
    "Transforme seu lar com a Refit Arquitetura! Projetos únicos de cozinhas, banheiros e reformas, com mais de 10 anos de experiência. Entre em contato!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
