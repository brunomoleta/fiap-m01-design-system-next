'use client'

import { Button, Input, Select, WidgetContainer } from "../../../../../../design-system/src";
import { formatCurrency } from "$/utils";
import useExtractStore from "$/app/store/extract.store";
import { getExtractDate, getTransactionLabel } from "$/app/components/Dashboard/Extract/extract.utils";
import Skeleton from "react-loading-skeleton";
import { useEffect, useState } from "react";
import { TransactionType } from "$/types";
import { TRANSACTION_TYPES } from "$/utils/vars";
import useEditTransactionStore from "$/app/store/editTransaction.store";
import { useUser } from "$/app/contexts/UserContext"; // Importe o contexto

const Extract = () => {
  const { userId } = useUser();

  const { extract, fetchExtractData } = useExtractStore();
  const { updateTransaction, transactionType, setTransactionType, transactionValue, setTransactionValue } = useEditTransactionStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<TransactionType | null>(null);

  useEffect(() => {
    if (userId) {
      fetchExtractData(userId);
    }
  }, [userId, fetchExtractData]);

  const handleEditClick = (transaction: TransactionType) => {
    setSelectedTransaction(transaction);
    setTransactionType(transaction.type_slug);
    setTransactionValue(Math.abs(transaction.value).toString());
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  };

  const saveChanges = async () => {
    if (selectedTransaction) {
      const updatedTransaction = {
        ...selectedTransaction,
        type_slug: transactionType,
        value: Number(transactionValue),
      };
      await updateTransaction(updatedTransaction, () => {
        closeModal();
        window.location.reload();
      });
    }
  };

  return (
    <WidgetContainer backgroundColor="background-light-grey" title="Extrato">
      <div className="flex flex-col gap-spacing-md min-w-56 max-tablet:min-w-full">
        {
          extract?.length === 0 ? (
            <p className="text-text-grey">Nenhuma transação encontrada.</p>
          ) : (
            extract.map(({ date, type_slug, value, id }) => (
              <div key={id} className="flex items-center justify-between pb-spacing-sm border-b border-text-active">
                <div className="flex flex-col gap-spacing-sm">
                  <span className="text-text-sm text-text-active capitalize">{getExtractDate(date).month}</span>
                  <span className="text-text-baseline">{getTransactionLabel(type_slug)}</span>
                  <span className="text-headline-sm font-bold">{formatCurrency(value)}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-text-sm text-text-grey">{getExtractDate(date).formattedDate}</span>
                  <span
                    className="text-text-sm capitalize cursor-pointer text-text-active"
                    onClick={() => handleEditClick({ date, type_slug, value, id })}
                  >
                    Editar
                  </span>
                </div>
              </div>
            ))
          )
        }

      </div>
      {isModalOpen && selectedTransaction && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-bold mb-5">Editar Transação</h2>

            <div className="flex flex-col gap-spacing-xl grow order-2">
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

              <div className="flex justify-end gap-4">
                <Button variant="secondary" onClick={saveChanges}>Salvar</Button>
                <Button variant="primary" onClick={closeModal}>Cancelar</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </WidgetContainer>
  );
};

export default Extract;
