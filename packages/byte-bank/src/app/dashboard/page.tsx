'use client'

import {useEffect} from "react";
import {Header} from "$/app/components";
import Footer from "$/app/components/Footer";
import {Balance, Extract, Transaction as TransactionWidget} from "../components";
import NavigationMenu from "$/app/components/Dashboard/NavigationMenu";
import useExtractStore from "$/app/store/extract.store";
import useBalanceStore from "$/app/store/balance.store";
import useUtilsStore from "$/app/store/utils.store";

export default function DashboardHome() {
  const {fetchExtractData} = useExtractStore();
  const {fetchBalanceData} = useBalanceStore();
  const {activeTab} = useUtilsStore()

  const refreshData = () => {
    fetchExtractData();
    fetchBalanceData();
  };

  useEffect(() => {
    refreshData()
  }, [])

  return (
    <>
      <Header isLoggedIn={true}/>
      <main
        className="grid grid-cols-dashboard-desktop max-w-7xl mx-auto p-spacing-lg gap-spacing-lg max-desktop:flex-col">
        <div className="max-desktop:hidden">
          <NavigationMenu/>
        </div>

        <div className={'flex flex-col gap-spacing-xl'}>
          <Balance/>
          {activeTab==='Início' && <TransactionWidget refreshExtract={refreshData}/>}
          {activeTab==='Transferências' && <div>TRANSFERENCIAS</div>}
          {activeTab === 'Investimentos' && <div>INVESTIMENTOS</div>}
          {activeTab === 'Outros Serviços' && <div>OUTROS SERVIÇOS</div>}
        </div>
        <Extract />

      </main>
      <Footer/>
    </>
  );
}
