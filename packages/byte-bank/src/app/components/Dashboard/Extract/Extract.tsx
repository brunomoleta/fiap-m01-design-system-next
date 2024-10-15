import {
  WidgetContainer,
  Button,
  Illustration,
  Select,
  Input
} from "../../../../../../design-system/src";

const Extract = () => {
  const TRANSACTION_TYPES = [
    {
      label: 'Depósito',
      value: 'deposito',
    },
    {
      label: 'Transferência',
      value: 'transferencia',
    },
    {
      label: 'Saque',
      value: 'saque',
    },
    {
      label: 'Compra',
      value: 'compra',
    },
    {
      label: 'Pagamento',
      value: 'pagamento',
    },
  ];

  return (
    <WidgetContainer
      backgroundColor="background-medium-grey"
      title="Nova transação"
    >
      <div className="flex justify-between gap-spacing-lg max-tablet:flex-col">
        <div className="flex flex-col gap-spacing-xl grow order-2">
          <Select name="transaction-type" options={TRANSACTION_TYPES} />
          <Input
            name="transaction-value"
            label="Valor"
            type="number"
            min="0.01"
            max="999999"
            placeholder="00,00"
            pattern="\d*"
          />
          <Button variant="secondary">Concluir transação</Button>
        </div>
        <div className="max-tablet:order-3">
          <Illustration chooseImage={"dashboardWoman"}/>
        </div>
      </div>
    </WidgetContainer>
  )
};

export default Extract;