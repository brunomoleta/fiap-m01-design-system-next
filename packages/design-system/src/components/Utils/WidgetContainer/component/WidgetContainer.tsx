import { ReactNode } from "react";

type Props = {
  backgroundColor?: "background-default" | "background-medium-grey" | "background-light-grey";
  title?: string;
  children?: ReactNode; 
};

const WidgetContainer = ({ backgroundColor, children, title }: Props) => {
  const returnStyles = () => `
    bg-${backgroundColor}
    text-${backgroundColor === 'background-default' ? 'text-revert' : 'text-default'}
    rounded-spacing-sm
    py-spacing-xl
    px-spacing-xl
    max-tablet:px-spacing-md
  `;

  return (
    <div className={returnStyles()}>
      {(title && <span className="text-headline-lg mb-spacing-lg block">{ title }</span>)}
      { children }
    </div>
  );
};

export default WidgetContainer;
