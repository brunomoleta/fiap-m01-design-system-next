import React from "react";

type Variants = "primary" | 'secondary' | "outlineGreen" | "outlineOrange";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Cor */
  variant: Variants;
  children: string;
};

/** Relacionado às ações do usuário. */
const Button = ({variant, children}: Props) => {
  const returnClass = (variant: Variants) => {
    let extraStyles: string;
    const baseClass = 'outline-offset-2 font-bold border-2 h-fit min-h-spacing-xl min-w-40 px-spacing-md rounded-spacing-sm';

    switch (variant) {
      case 'primary':
        extraStyles = 'border-transparent text-text-revert bg-background-accent transition-colors duration-500 hover:duration-200 hover:ease-in hover:bg-text-default';
        break;
      case 'secondary':
        extraStyles = 'border-transparent text-text-revert bg-background-default transition-colors duration-500 hover:duration-200 hover:ease-in hover:bg-text-default';
        break;
      case 'outlineGreen':
        extraStyles = 'border-text-active text-text-active';
        break;
      case 'outlineOrange':
        extraStyles = 'border-background-accent text-background-accent';
        break;
      default:
        extraStyles = '';
        break;
    }

    return `${baseClass} ${extraStyles}`;
  }

  return (
    <button className={returnClass(variant)}>
      {children}
    </button>
  )

};

export default Button;
