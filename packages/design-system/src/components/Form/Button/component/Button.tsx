import React from "react";

type Variants = "primary" | 'secondary' | "inheritBGBlack" | "inheritBGWhite";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Cor */
  variant: Variants;
  children: string;
};

/** Relacionado às ações do usuário. */
const Button = ({variant, children}: Props) => {
  const returnClass = (variant: Variants) => {
    switch (variant) {
      case 'primary':
        return 'font-bold border-2 border-transparent bg-background-accent h-fit min-h-spacing-xl min-w-40 px-spacing-md p-y-spacing-md rounded-spacing-sm text-white';
      case 'secondary':
        return 'font-bold border-2 border-transparent bg-background-default h-fit min-h-spacing-xl min-w-40 px-spacing-md p-y-spacing-md rounded-spacing-sm text-white';
      case 'inheritBGBlack':
        return 'font-bold border-2 border-text-active h-fit min-h-spacing-xl min-w-40 px-spacing-md p-y-spacing-xl rounded-spacing-sm text-text-active';
      case 'inheritBGWhite':
        return 'font-bold border-2 border-background-accent h-fit min-h-spacing-xl min-w-40 px-spacing-md p-y-spacing-md rounded-spacing-sm text-background-accent';
      default:
        return '';
    }
  }

  return (
    <button className={returnClass(variant)}>
      {children}
    </button>
  )

};

export default Button;
