'use client'

import { useEffect } from "react";
import { WidgetContainer, Button } from "../../../../../../design-system/src";
import useCardsStore from "$/app/store/cards.store";
import CardComponent from "./CardComponent";
import Skeleton from "react-loading-skeleton";

const Cards = () => {
  const { cards, fetchCardsData } = useCardsStore()

  useEffect(() => {
    fetchCardsData();
  }, []);

  return (
    <WidgetContainer
      backgroundColor="background-medium-grey"
      title="Meus Cartões"
    >
      <div className="flex flex-col gap-spacing-xl">
        {
          (
            !cards.length ? 
              Array.from(Array(3).keys()).map((i) => (
                <div key={i}>
                  <Skeleton />
                  <Skeleton className="h-44" />
                </div>)
              ) :
              cards.map((card, index) => <CardComponent card={card} key={index} />))}
      </div>
    </WidgetContainer>
  )
};

export default Cards;