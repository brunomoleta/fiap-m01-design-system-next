import { WidgetContainer } from "../../../../../../design-system/src";

const Transactions = () => {
  return (
    <WidgetContainer
      backgroundColor="background-light-grey"
      title="Extrato"
    >
      <div className="flex flex-col gap-spacing-md min-w-56 max-tablet:min-w-full">
        <div className="flex items-center justify-between pb-spacing-sm border-b border-text-active">
          <div className="flex flex-col gap-spacing-sm">
            <span className="text-text-sm text-text-active">Novembro</span>
            <span className="text-text-baseline">Depósito</span>
            <span className="text-headline-sm font-bold">R$ 150</span>
          </div>
          <span className="text-text-sm text-text-grey">19/11/2022</span>
        </div>
      </div>
    </WidgetContainer>
  )
};

export default Transactions;