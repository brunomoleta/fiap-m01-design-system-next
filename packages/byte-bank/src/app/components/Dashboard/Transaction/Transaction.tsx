'use client'

import React, { useState } from "react";
import { TransactionType } from '$/types';
import {
  WidgetContainer,
  Button,
  Illustration,
  Select,
  Input,
  Alert
} from "../../../../../../design-system/src";
import { postTransaction } from "$/requests/dashboard";
import { TRANSACTION_TYPES } from "$/utils/vars";

interface Props {
  refreshExtract: () => void;
}


const Transaction = ({ refreshExtract }: Props) => {
  const ALERT_TYPES = {
    error: {
      message: 'Não foi possível realizar a transação. Tente mais tarde.',
      color: 'text-warning',
    },
    success: {
      message: 'Transação realizada por sucesso!',
      color: 'text-active',
    },
    invalid: {
      message: 'Transação inválida. Tente novamente.',
      color: 'text-warning',
    },
  };

  type AlertTypes = 'success' | 'error' | 'invalid';

  const [alertType, setAlertType] = useState<AlertTypes>('success');
  const [transactionType, setTransactionType] = useState('deposito');
  const [transactionValue, setTransactionValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const setAlert = (show: boolean, type?: 'error' | 'success' | 'invalid') => {
    if (type) setAlertType(type);
    setShowAlert(show);
  };

  const fetchData = async () => {
    if (!transactionValue || isNaN(Number(transactionValue))) {
      setAlert(true, "invalid");
      return;
    }

    setLoading(true);

    try {
      const nValue = Number(transactionValue);

      const payload: TransactionType = {
        value: transactionType === 'deposito' ? Math.abs(nValue) : -Math.abs(nValue),
        type_slug: transactionType,
        date: new Date().getTime(),
      }; 

      await postTransaction(payload);

      setAlert(true, 'success');

      refreshExtract();
    } catch (error) {
      console.error('Erro ao criar transação', error);
      setAlert(true, 'error');
    } finally {
      setLoading(false);
      setTransactionValue('');

      setTimeout(() => setAlert(false), 5000);
    }
  };

  return (
    <WidgetContainer
      backgroundColor="background-medium-grey"
      title="Nova transação"
    >
      <div className="flex justify-between gap-spacing-lg max-tablet:flex-col">
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
            type="number"
            min="0.01"
            max="999999"
            placeholder="00,00"
            value={transactionValue}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTransactionValue(event.target.value)}
          />
          <Button variant="secondary" onClick={fetchData} disabled={loading}>Concluir transação</Button>
        </div>
        <div className="max-tablet:order-3">
          <Illustration chooseImage={"dashboardWoman"}/>
        </div>
      </div>

      {(showAlert &&
        <div className="pt-spacing-md">
          <Alert
            callback={() => setShowAlert(false)}
            text={ALERT_TYPES[alertType].message}
            bgColor={ALERT_TYPES[alertType].color}
          />
        </div>
      )}
    </WidgetContainer>
  )
};

export default Transaction;