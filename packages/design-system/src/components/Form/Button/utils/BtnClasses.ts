export type BtnVariants = "primary" | "primaryGreen" | "secondary" | "outlineGreen" | "outlineOrange" | "inherit" | "primaryBlack" | "outlineBlack";

export const returnClass = (variant: BtnVariants) => {
  let extraStyles: string;
  const baseClass =
    "outline-offset-2 font-bold border-2 h-fit min-h-spacing-xl min-w-40 px-spacing-lg py-spacing-sm rounded-spacing-sm";

  switch (variant) {
    case "primary":
      extraStyles =
        "border-transparent text-text-revert bg-background-accent transition-colors duration-500 hover:duration-200 hover:ease-in hover:bg-text-default";
      break;
    case "inherit":
      extraStyles =
        "px-0 border-transparent text-text-active font-normal underline hover:no-underline duration-500 hover:duration-200 hover:ease-in";
      break;
    case "secondary":
      extraStyles =
        "border-transparent text-text-revert bg-background-default transition-colors duration-500 hover:duration-200 hover:ease-in hover:bg-text-default";
      break;
    case "outlineGreen":
      extraStyles = "border-text-active text-text-active";
      break;
    case "outlineOrange":
      extraStyles = "border-background-accent text-background-accent";
      break;
    case "primaryGreen":
      extraStyles = "border-transparent text-text-revert bg-background-medium-green transition-colors duration-500 hover:duration-200 hover:ease-in hover:bg-text-default";
      break;
    case "primaryBlack":
      extraStyles = "border-transparent text-text-revert bg-black";
      break;
    case "outlineBlack":
      extraStyles = "border-black text-black";
      break;
    default:
      extraStyles = "";
      break;
  }

  return `${baseClass} ${extraStyles}`;
};