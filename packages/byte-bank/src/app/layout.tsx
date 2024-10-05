import type {Metadata} from "next";
import React from "react";

import "./main.css";

export const metadata: Metadata = {
  title: "Página inicial | Bytebank",
  description: "Aplicação financeira construída com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
      >
        {children}
      </body>
    </html>
  );
}
