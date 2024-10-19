'use client'

import {useEffect, useState} from "react";
import {Header} from "$/app/components";
import Footer from "$/app/components/Footer";
import {getBalance, getExtract} from "$/requests/dashboard";
import {Balance, Extract, Transaction as TransactionWidget} from "../components";
import {TransactionType} from "$/types";
import {formatCurrency} from "$/utils";
import NavigationMenu from "$/app/components/Dashboard/NavigationMenu";

export default function DashboardHome() {
  const [extract, setExtract] = useState<TransactionType[]>([]);
  const [balance, setBalance] = useState('');

  const fetchExtractData = async () => {
    try {
      const resp = await getExtract();

      const {data} = resp;

      setExtract(data.data);
      console.log(extract);
    } catch (error) {
      console.error('Erro ao recuperar extrato', error);
    }
  };

  const fetchBalanceData = async () => {
    try {
      const resp = await getBalance();

      const {data} = resp;

      const formattedBalance = formatCurrency(data.data.balance);

      setBalance(formattedBalance);
    } catch (error) {
      console.error('Erro ao recuperar balanço', error);
    }
  };

  const refreshData = () => {
    fetchExtractData();
    fetchBalanceData();
  };

  useEffect(() => {
    fetchExtractData();
    fetchBalanceData();
  }, [])

  return (
    <>
      <Header isLoggedIn={true}/>
      <main className="grid grid-cols-dashboard-desktop max-w-7xl mx-auto p-spacing-lg gap-spacing-lg max-desktop:flex-col">
        <div className="max-desktop:hidden">
          <NavigationMenu/>
        </div>

        <div className={'flex flex-col gap-spacing-xl'}>
        <Balance balance={balance}/>
        <TransactionWidget refreshExtract={refreshData}/>
        </div>
        <Extract extract={extract}/>

      </main>
      <Footer/>
    </>
  );
}
