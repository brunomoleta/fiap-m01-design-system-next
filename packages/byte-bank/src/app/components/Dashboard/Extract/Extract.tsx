import { WidgetContainer } from "../../../../../../design-system/src";
import { Transaction } from '$/types';
import { formatCurrency, getDate } from "$/utils";
import { MONTHS, TRANSACTION_TYPES } from "$/utils/vars";

interface Props {
  extract: Transaction[];
}

const Extract = ({ extract }: Props) => {
  const getTransactionLabel = (slug: string) => {
    return TRANSACTION_TYPES.find(({ value }) => value === slug)?.label;
  }

  const getExtractDate = (date: number) => {
    const { day, month, year } = getDate(new Date(date));

    return {
      formattedDate: `${day}/${month}/${year}`,
      month: MONTHS[Number(month) - 1],
    }
  };

  return (
    <WidgetContainer
      backgroundColor="background-light-grey"
      title="Extrato"
    >
      <div className="flex flex-col gap-spacing-md min-w-56 max-tablet:min-w-full">
        {
          (
            extract?.length && extract.map(({ date, type_slug, value, id }) => (
              <div key={id} className="flex items-center justify-between pb-spacing-sm border-b border-text-active">
                <>
                  <div className="flex flex-col gap-spacing-sm">
                    <span className="text-text-sm text-text-active capitalize">{getExtractDate(date).month}</span>
                    <span className="text-text-baseline">{getTransactionLabel(type_slug)}</span>
                    <span className="text-headline-sm font-bold">{formatCurrency(value)}</span>
                  </div>
                  <span className="text-text-sm text-text-grey">{getExtractDate(date).formattedDate}</span>
                </>
              </div>))
          )
        }
      </div>
    </WidgetContainer>
  )
};

export default Extract;