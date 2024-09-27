import { FillIconProps } from "@/components/Icon/types";
import { colorsComplete } from "@/tokens";

const YoutubeIcon = (props: FillIconProps) => {
  const { height, width, fill } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 31 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.585 6.87502C30.585 3.23502 27.635 0.275024 23.985 0.275024H7.11502C3.47502 0.285024 0.525024 3.23502 0.525024 6.87502V14.725C0.525024 18.365 3.47502 21.325 7.12502 21.325H23.995C27.635 21.325 30.595 18.375 30.595 14.725V6.87502H30.585ZM20.665 11.385L13.095 15.125C12.795 15.285 11.795 15.075 11.795 14.735V7.05502C11.795 6.71502 12.815 6.49502 13.105 6.66502L20.345 10.605C20.645 10.775 20.965 11.215 20.665 11.385Z"
        fill={colorsComplete[fill].hex}
      />
    </svg>
  );
};
export default YoutubeIcon;