'use client'

import { useEffect, useState } from "react";
import { WidgetContainer, Divider, Illustration } from "../../../../../../design-system/src";
import { getBalance } from "$/requests/dashboard";
import { formatCurrency, getDate } from "$/utils";

const Balance = () => {
  const [balance, setBalance] = useState('');
  const [date, setDate] = useState('');

  const fetchData = async () => {
    try {
      const resp = await getBalance();

      const { data } = resp;
      
      const formattedBalance = formatCurrency(data.data.balance);

      const { week_day, day, month, year } = getDate();

      setDate(`${week_day}, ${day}/${month}/${year}`);

      setBalance(formattedBalance);
    } catch (error) {
      console.error('Erro ao recuperar balanço', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <WidgetContainer
      backgroundColor="background-default"
      title="Olá, Usuário! :)"
    >
      <div className="flex justify-between align-center gap-spacing-xl max-tablet:flex-col">
        <div className="flex flex-col grow min-w-40">
          <span className="text-text-sm mb-spacing-xl whitespace-nowrap capitalize">{date}</span>
          <span className="text-text-baseline mb-spacing-sm">Saldo</span>
          <Divider isSemantic={false} />
          <span className="text-text-sm mt-spacing-md">Conta corrente</span>
          <span className="text-headline-base mt-spacing-sm">{balance}</span>
        </div>

        <div className="flex justify-end grow">
          <Illustration chooseImage={"dashboardMan"}/>
        </div>

      </div>
    </WidgetContainer>
  )
};

export default Balance;