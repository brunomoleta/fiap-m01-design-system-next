import { FillIconProps } from "../../../types";
import { colorsComplete } from "../../../../../tokens";

const HamburgerIcon = (props: FillIconProps) => {
  const { height, width, fill } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H24V2.6875H0V0ZM0 9.3125V6.6875H24V9.3125H0ZM0 16V13.3125H24V16H0Z"
        fill={colorsComplete.hasOwnProperty(fill) ? (colorsComplete as any)[fill].hex : "#000"}
      />
    </svg>
  );
};

export default HamburgerIcon;
