'use client'

import React from "react";
import {
  WidgetContainer,
  Illustration,
} from "../../../../../../design-system/src";
import TransactionForm from "$/app/components/Dashboard/Transaction/TransactionForm";
import TransactionAlert from "$/app/components/Dashboard/Transaction/TransactionAlert";

interface Props {
  refreshExtract: () => void;
}

const Transaction = ({refreshExtract}: Props) => {

  return (
    <>
      <WidgetContainer
        backgroundColor="background-medium-grey"
        title="Nova transação"
      >
        <div className="flex justify-between gap-spacing-lg max-tablet:flex-col">
          <TransactionForm refreshExtract={refreshExtract}/>
          <div className="max-tablet:order-3">
            <Illustration chooseImage={"dashboardWoman"}/>
          </div>
        </div>
      </WidgetContainer>
      <TransactionAlert/>
    </>
  )
};

export default Transaction;