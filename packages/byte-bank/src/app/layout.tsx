// layout.tsx
import type { Metadata } from "next";
import React from "react";
import { connectMongoDB } from '$/server/libs/mongoDB';
import "./main.css";
import 'react-loading-skeleton/dist/skeleton.css';
import { SkeletonTheme } from "react-loading-skeleton";
import { UserProvider } from "./contexts/UserContext";


export const metadata: Metadata = {
  title: "Página inicial | Bytebank",
  description: "Aplicação financeira construída com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  connectMongoDB();
  return (
    <html lang="pt-BR">
      <body>
        <UserProvider>
          <SkeletonTheme baseColor="#9D9D9D" highlightColor="#f8f8f8">
            {children}
          </SkeletonTheme>
        </UserProvider>
      </body>
    </html>
  );
}
