import { FillIconProps } from "@/components/Icon/types";
import { colorsComplete } from "../../../../../tokens";

const LogoIcon = (props: FillIconProps) => {
  const { height, width, fill = "text-active" } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.1667 6.53688H6.69141V20.0748H20.1667V6.53688Z"
        fill={colorsComplete[fill].hex}
      />
      <path
        d="M6.64692 0H0.0924072V6.49216H6.64692V0Z"
        fill={colorsComplete[fill].hex}
      />
      <path
        d="M26.5809 0H20.1188V6.49216H26.5809V0Z"
        fill={colorsComplete[fill].hex}
      />
      <path
        d="M13.4753 20.03H0V26.8007H13.4753V20.03Z"
        fill={colorsComplete[fill].hex}
      />
      <path
        d="M20.1667 6.53688H6.69141V20.0748H20.1667V6.53688Z"
        fill={colorsComplete[fill].hex}
      />
      <path
        d="M6.64692 0H0.0924072V6.49216H6.64692V0Z"
        fill={colorsComplete[fill].hex}
      />
      <path
        d="M26.5809 0H20.1188V6.49216H26.5809V0Z"
        fill={colorsComplete[fill].hex}
      />
    </svg>
  );
};

export default LogoIcon;
