import {WidgetContainer} from "../../../../../../design-system/src";
import {formatCurrency} from "$/utils";
import useExtractStore from "$/app/store/extract.store";
import {getExtractDate, getTransactionLabel} from "$/app/components/Dashboard/Extract/extract.utils";
import Skeleton from "react-loading-skeleton";

const Extract = () => {
  const {extract} = useExtractStore();

  return (
    <WidgetContainer
      backgroundColor="background-light-grey"
      title="Extrato"
    >
      <div className="flex flex-col gap-spacing-md min-w-56 max-tablet:min-w-full">
        {
          (
            !extract.length ?
            Array.from(Array(5).keys()).map((i) => (
              <div key={i} className="border-b border-text-active">
                <div className="flex flex-col gap-spacing-sm">
                  <Skeleton count={4} />
                </div>
              </div>)
            ) :
            extract.map(({ date, type_slug, value, id }) => (
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