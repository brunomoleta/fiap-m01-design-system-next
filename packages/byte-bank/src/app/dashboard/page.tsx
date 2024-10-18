'use client'

import { useEffect, useState } from "react";
import { Header } from "$/app/components";
import Footer from "$/app/components/Footer";
import { getExtract } from "$/requests/dashboard";
import {  WidgetContainer } from "../../../../design-system/src";
import { Balance, Extract, Transaction as TransactionWidget } from "../components";
import { Transaction } from "$/types";

export default function Home() {
  const [extract, setExtract] = useState<Transaction[]>([]);

  const fetchData = async () => {
    try {
      const resp = await getExtract();

      const { data } = resp;

      setExtract(data.data);
      console.log(extract);
    } catch (error) {
      console.error('Erro ao recuperar extrato', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <Header isLoggedIn={true} />
      <main className="p-spacing-lg flex gap-spacing-lg max-desktop:flex-col">
        <div className="max-desktop:hidden">
          <WidgetContainer
            backgroundColor="background-light-grey"
            title="Menu de navegação"
          >
            [MENU DE NAVEGAÇÃO]
          </WidgetContainer>
        </div>

        <div className="flex flex-col gap-spacing-lg grow">
          <Balance />

          <TransactionWidget refreshExtract={fetchData} />
        </div>

        <Extract extract={extract} />
      </main>
      <Footer/>
    </>
  );
}
