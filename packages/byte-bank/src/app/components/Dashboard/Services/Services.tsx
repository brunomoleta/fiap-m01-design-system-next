import { 
  WidgetContainer,
  CardIcon,
  CreditMobileIcon,
  DonationIcon,
  InsuranceIcon,
  LoanIcon,
  PixIcon,
} from "../../../../../../design-system/src";

const Services = () => {
  const SERVICES_LIST = [
    {
      label: 'Empréstimo',
      Icon: LoanIcon,
    },
    {
      label: 'Meus cartões',
      Icon: CardIcon,
    },
    {
      label: 'Doações',
      Icon: DonationIcon,
    },
    {
      label: 'Pix',
      Icon: PixIcon,
    },
    {
      label: 'Seguros',
      Icon: InsuranceIcon,
    },
    {
      label: 'Crédito celular',
      Icon: CreditMobileIcon,
    },
  ];

  return (
    <WidgetContainer
      backgroundColor="background-medium-grey"
      title="Confira os serviços disponíveis"
    >
      <div className="flex flex-wrap gap-spacing-md">
        {(
          SERVICES_LIST.map(({ label, Icon }, index) => (
            <div
              key={index}
              className="cursor-pointer bg-white rounded-spacing-sm p-spacing-lg flex flex-wrap flex-col items-center min-w-fit gap-spacing-lg w-1/4 justify-center grow max-tablet:w-1/2"
            >
              <Icon />
              <span className="text-headline-sm">{label}</span>
            </div>
            )
          )
        )}
      </div>
    </WidgetContainer>
  )
};

export default Services;