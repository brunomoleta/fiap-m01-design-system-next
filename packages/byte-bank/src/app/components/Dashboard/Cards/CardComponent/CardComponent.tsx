import {Button, Select} from "../../../../../../../design-system/src";
import React, { useEffect, useState } from "react";
import { Card } from "$/types";
import { CARD_FUNCTION_LABELS, CARD_FUNCTIONS, CARD_TYPES_LABELS } from "$/utils/vars";
import useUtilsStore from "$/app/store/utils.store";
import useCardsStore from "$/app/store/cards.store";

interface Props {
  card: Card;
}

const CardComponent = ({card}: Props) => {
  const {fetchCardUpdate} = useCardsStore();
  const [cardStatus, setCardStatus] = useState(card.is_active);
  const [cardFunction, setCardFunction] = useState(card.function);

  const CARD_COLORS = {
    gold: 'bg-background-accent',
    platinum: 'bg-background-default',
    silver: 'bg-background-dark-grey',
    black: 'bg-text-default',
  };

  const formatCardDigits = (d: string) => `**** **** **** ${d}`;

  const handleFunctionChange = (value: 'credit' | 'debit' | 'multiple') => {
    if (!card.id) return;

    setCardFunction(value);
    
    fetchCardUpdate(card.id, {
      function: value,
    });
  };

  const handleStatusChange = () => {
    if (!card.id) return;
  
    const newStatus = !cardStatus;
  
    setCardStatus(newStatus);
  
    fetchCardUpdate(card.id, {
      is_active: newStatus,
    });
  };
  
  useEffect(() => {
    setCardStatus(card.is_active);
    setCardFunction(card.function);
  }, [card]);

  return (
    <div className="block">
      <span className="block mb-spacing-lg">{CARD_TYPES_LABELS[card.type]}</span>
      <div className="flex max-tablet:flex-col gap-spacing-lg w-full">
        <div className={`grow text-white p-spacing-md rounded-spacing-sm ${CARD_COLORS[card.category]}`}>
          <span className="block text-headline-sm italic">Byte</span>
          <span className="block text-text-baseline mt-spacing-sm capitalize">{`${card.category} (${CARD_FUNCTION_LABELS[cardFunction]})`}</span>
          <span className="block text-text-sm mt-spacing-xl">{card.card_holder}</span>
          <span className="block text-text-sm mt-spacing-sm">{formatCardDigits(card.card_last_digits)}</span>
        </div>
        <div className="max-w-52 flex flex-col gap-spacing-md max-tablet:max-w-full">
          <Button
            onClick={handleStatusChange}
            variant={cardStatus ? 'outlineOrange' : 'primary'}
          >
            {cardStatus ? 'Bloquear' : 'Desbloquear'}
          </Button>
          <Select
            name="card-function"
            options={CARD_FUNCTIONS}
            value={cardFunction}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => handleFunctionChange(event.target.value as 'credit' | 'debit' | 'multiple')}
          />
        </div>
      </div>
    </div>
  )
};

export default CardComponent;