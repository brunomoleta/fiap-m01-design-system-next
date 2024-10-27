'use client'

import { useEffect, useState } from "react";
import { WidgetContainer, Divider, Illustration } from "../../../../../../design-system/src";
import { getDate } from "$/utils";
import useBalanceStore from "$/app/store/balance.store";
import Skeleton from "react-loading-skeleton";

const Balance = () => {
  const {balance} = useBalanceStore()

  const [date, setDate] = useState('');

  const setCurrentDate = () => {
    const { week_day, day, month, year } = getDate();

    setDate(`${week_day}, ${day}/${month}/${year}`);
  };

  useEffect(() => {
    setCurrentDate();
  }, [])

  return (
    <WidgetContainer
      backgroundColor="background-default"
      title="Olá, Usuário! :)"
    >
      <div className="flex justify-between align-center gap-spacing-xl max-tablet:flex-col">
        <div className="flex flex-col grow min-w-40">
          <span className="text-text-sm mb-spacing-xl whitespace-nowrap capitalize">
            {(date || <Skeleton /> )}
          </span>
          <span className="text-text-baseline mb-spacing-sm">Saldo</span>
          <Divider isSemantic={false} />
          <span className="text-text-sm mt-spacing-md">Conta corrente</span>
          <span className="text-headline-base mt-spacing-sm">{(balance || <Skeleton /> )}</span>
        </div>

        <div className="flex justify-end grow">
          <Illustration chooseImage={"dashboardMan"}/>
        </div>

      </div>
    </WidgetContainer>
  )
};

export default Balance;