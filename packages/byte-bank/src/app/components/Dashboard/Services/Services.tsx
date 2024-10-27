import useUtilsStore from "$/app/store/utils.store";
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
  const {setActiveTab} = useUtilsStore();

  const SERVICES_LIST = [
    {
      label: 'Empréstimo',
      Icon: LoanIcon,
    },
    {
      label: 'Meus cartões',
      Icon: CardIcon,
      is_available: true,
      action: () => setActiveTab('Meus cartões'),
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
          SERVICES_LIST.map(({ label, Icon, is_available, action }, index) => (
            <div
              key={index}
              className="relative cursor-pointer bg-white rounded-spacing-sm p-spacing-lg  min-w-fit  w-1/4 grow max-tablet:w-1/2"
              onClick={action}
            > 
              <div className={`${!is_available ? 'flex absolute' : 'hidden'} inset-0 rounded-spacing-sm items-center justify-center`}>
                <span className="text-headline-sm">Em breve</span>
              </div>
              <div className={`flex flex-wrap flex-col items-center gap-spacing-lg justify-center ${is_available ? '' : 'blur-sm'}`}>
                <Icon />
                <span className="text-headline-sm">{label}</span>
              </ div>
            </div>
            )
          )
        )}
      </div>
    </WidgetContainer>
  )
};

export default Services;