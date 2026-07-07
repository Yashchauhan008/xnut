import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

export const metadata: Metadata = {
  title: "xnut — Plant Protein | Coming Soon",
  description:
    "xnut.in — natural peanut butter and plant protein. Launching soon.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
