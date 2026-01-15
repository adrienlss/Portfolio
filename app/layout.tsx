import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adrien Lassus - Portfolio | Élève Ingénieur ESILV",
  description: "Portfolio d'Adrien Lassus - Élève Ingénieur 2ème année Prépa Intégrée @ESILV, spécialisé en cybersécurité, développement full-stack et infrastructure. Recherche d'alternance (3 ans) à partir de Septembre 2026.",
  keywords: ["Adrien Lassus", "Portfolio", "ESILV", "Cybersécurité", "Développement Full-Stack", "Infrastructure", "Alternance", "PrepAvenir"],
  authors: [{ name: "Adrien Lassus" }],
  openGraph: {
    title: "Adrien Lassus - Portfolio",
    description: "Élève Ingénieur 2ème année Prépa Intégrée @ESILV | Vers Majeure Cybersécurité & Objets Connectés",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
