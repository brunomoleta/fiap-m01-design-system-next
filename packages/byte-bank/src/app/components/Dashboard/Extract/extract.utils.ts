import {MONTHS, TRANSACTION_TYPES} from "$/utils/vars";
import {getDate} from "$/utils";

export const getTransactionLabel = (slug: string) => {
  return TRANSACTION_TYPES.find(({ value }) => value === slug)?.label;
}

export const getExtractDate = (date: number) => {
  const { day, month, year } = getDate(new Date(date));

  return {
    formattedDate: `${day}/${month}/${year}`,
    month: MONTHS[Number(month) - 1],
  }
};