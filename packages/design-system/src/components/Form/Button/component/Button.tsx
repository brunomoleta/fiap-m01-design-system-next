import React from "react";
import {returnClass} from "../utils/BtnClasses";

export type BtnVariants = "primary" | "primaryGreen" | "secondary" | "outlineGreen" | "outlineOrange" | "inherit";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: BtnVariants;
  children: string;
};

/** Relacionado às ações do usuário. */
const Button = ({variant, children, ...props}: Props) => {
  return <button className={returnClass(variant)} {...props} >{children}</button>;
};

export default Button;
