import { Header } from "$/app/components";
import Footer from "$/app/components/Footer";
import { 
  WidgetContainer, 
  Divider, 
  Illustration, 
  Input,
  Select,
  Button 
} from "../../../../design-system/src";

export default function Home() {
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
    <>
      <Header isLoggedIn={true} />
      <main className="p-spacing-lg flex gap-spacing-lg max-desktop:flex-col">
        <div className="max-desktop:hidden">
          <WidgetContainer
            backgroundColor="background-light-grey"
            title="Extrato"
          >
            teste
          </WidgetContainer>
        </div>

        <div className="flex flex-col gap-spacing-lg grow">
          <WidgetContainer
            backgroundColor="background-default"
            title="Olá, Usuário! :)"
          >
            <div className="flex justify-between align-center gap-spacing-xl max-tablet:flex-col">
              <div className="flex flex-col grow">
                <span className="text-text-sm mb-spacing-xl whitespace-nowrap">Quinta-feira, 08/09/2022</span>
                <span className="text-text-baseline mb-spacing-sm">Saldo</span>
                <Divider isSemantic={false} />
                <span className="text-text-sm mt-spacing-md">Conta corrente</span>
                <span className="text-headline-base mt-spacing-sm">R$ 2.500,00</span>
              </div>

              <div className="flex justify-end grow">
                <Illustration chooseImage={"dashboardMan"}/>
              </div>

            </div>
          </WidgetContainer>

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
        </div>

        <WidgetContainer
          backgroundColor="background-light-grey"
          title="Extrato"
        >
          teste
        </WidgetContainer>
      </main>
      <Footer/>
    </>
  );
}
