import React from "react";
import {returnClass} from "../../Form/Button/utils/BtnClasses";
import Link from "next/link";

export type BtnVariants = "primary" | "secondary" | "outlineGreen" | "outlineOrange" | "inherit";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant: BtnVariants;
  children: string;
  urlDestination?: string
};

/** Relacionado às ações do usuário. */
const StyledLink = ({variant, children, urlDestination='/', ...props}: Props) => {
  return <Link href={urlDestination} className={returnClass(variant)} {...props} >{children}</Link>;
};

export default StyledLink;
