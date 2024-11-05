import { Button, Input, Select } from "../../../../../../../design-system/src";
import { TRANSACTION_TYPES } from "$/utils/vars";
import React from "react";
import useTransactionStore from "$/app/store/transaction.store";
import useUtilsStore from "$/app/store/utils.store";

interface Props {
  refreshExtract: () => void;
  userId: string; // Adicionar userId como propriedade
}

const TransactionForm = ({ refreshExtract, userId }: Props) => {
  const { loading } = useUtilsStore();
  const { transactionType, setTransactionType, fetchData, setTransactionValue, transactionValue } =
    useTransactionStore();

  return (
    <>
      <form onSubmit={() => fetchData(refreshExtract, userId)} className="flex flex-col gap-spacing-xl grow order-2">
        <Select
          name="transaction-type"
          options={TRANSACTION_TYPES}
          value={transactionType}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setTransactionType(event.target.value)}
        />
        <Input
          name="transaction-value"
          label="Valor"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="00,00"
          value={transactionValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTransactionValue(event.target.value)}
        />
        <Button variant="secondary" onClick={() => fetchData(refreshExtract, userId)} disabled={loading}>
          Concluir transação
        </Button>
      </form>
    </>
  );
};

export default TransactionForm;
