import type {Metadata} from "next";

import {Header} from "../components";
import React from "react";
import Footer from "$/app/components/Footer";

export const metadata: Metadata = {
  title: "Página não encontrada | Bytebank",
};

export default function NotFoundLayout({
                                         children,
                                       }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
    <body>
    <div className={'grid grid-rows-middle-1fr'}>
      <Header isLoggedIn={false}/>
      <main className="grid flex-grow place-content-center bg-gradient-to-b from-background-default to-background-fade">
        {children}
      </main>
    <Footer/>
    </div>
  </body>
  </html>
);
}
