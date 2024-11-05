'use client'

import { useEffect } from "react";
import { Header } from "$/app/components";
import { Balance, Extract } from "../components";
import NavigationMenu from "$/app/components/Dashboard/NavigationMenu";
import useExtractStore from "$/app/store/extract.store";
import useBalanceStore from "$/app/store/balance.store";
import Content from "$/app/components/Dashboard/Content";
import { useUser } from "$/app/contexts/UserContext"; // Importe o contexto


export default function DashboardHome() {
  const { fetchExtractData } = useExtractStore();
  const { fetchBalanceData } = useBalanceStore();
  const { userId } = useUser();

  useEffect(() => {
    if (userId) {
      fetchExtractData(userId);
      fetchBalanceData(userId)
    }
  }, [userId, fetchExtractData])

  return (
    <>
      <Header isLoggedIn={true} />
      <main
        className="max-desktop:flex grid grid-cols-dashboard-desktop max-w-7xl mx-auto p-spacing-lg gap-spacing-lg max-desktop:flex-col">
        <NavigationMenu />
        <div className={'flex flex-col gap-spacing-xl'}>
          <Balance />
          <Content />
        </div>
        <Extract />
      </main>
    </>
  );
}
