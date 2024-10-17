'use client'

import { useState } from "react";
import { Transaction } from '$/types';
import {
  WidgetContainer,
  Button,
  Illustration,
  Select,
  Input,
  Alert
} from "../../../../../../design-system/src";
import { postTransaction } from "$/requests/dashboard";
import { TRANSACTION_TYPES } from "$/requests/vars";

const Transactions = () => {
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

  let AlertTypes:  'success' | 'error' | 'invalid';

  const [transactionType, setTransactionType] = useState('deposito');
  const [transactionValue, setTransactionValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [alertType, setAlertType] = useState<typeof AlertTypes>('success');
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

      const payload: Transaction = {
        value: transactionType === 'deposito' ? Math.abs(nValue) : -Math.abs(nValue),
        type_slug: transactionType,
        date: new Date().getTime(),
      }; 

      await postTransaction(payload);
      setAlert(true, 'success');
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

export default Transactions;