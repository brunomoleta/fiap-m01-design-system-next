import { WidgetContainer, Divider, Illustration } from "../../../../../../design-system/src";

const Balance = () => {
  return (
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
  )
};

export default Balance;