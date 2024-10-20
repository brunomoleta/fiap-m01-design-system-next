import { FillIconProps } from "../../../types";
import { colorsComplete } from "../../../../../tokens";

const InstagramIcon = (props: FillIconProps) => {
  const { height, width, fill } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.0352 5.28998C22.0752 5.28998 21.3052 6.06998 21.3052 7.01998C21.3052 7.96998 22.0852 8.75998 23.0352 8.75998C23.9852 8.75998 24.7652 7.97998 24.7652 7.01998C24.7652 6.05998 23.9852 5.28998 23.0352 5.28998Z"
        fill={colorsComplete.hasOwnProperty(fill) ? (colorsComplete as any)[fill].hex : "#000"}
      />
      <path
        d="M15.3252 7.51001C11.3052 7.51001 8.03516 10.78 8.03516 14.8C8.03516 18.82 11.3052 22.09 15.3252 22.09C19.3452 22.09 22.6152 18.82 22.6152 14.8C22.6152 10.78 19.3452 7.51001 15.3252 7.51001ZM15.3252 19.47C12.7552 19.47 10.6552 17.38 10.6552 14.8C10.6552 12.22 12.7452 10.13 15.3252 10.13C17.9052 10.13 19.9952 12.22 19.9952 14.8C19.9952 17.38 17.9052 19.47 15.3252 19.47Z"
        fill={colorsComplete.hasOwnProperty(fill) ? (colorsComplete as any)[fill].hex : "#000"}
      />
      <path
        d="M21.115 29.6H9.29503C4.39503 29.6 0.405029 25.61 0.405029 20.71V8.89C0.405029 3.99 4.39503 0 9.29503 0H21.105C26.005 0 29.995 3.99 29.995 8.89V20.71C29.995 25.61 26.005 29.6 21.105 29.6H21.115ZM9.29503 2.79C5.92503 2.79 3.19503 5.53 3.19503 8.89V20.71C3.19503 24.08 5.93503 26.81 9.29503 26.81H21.105C24.475 26.81 27.215 24.07 27.215 20.71V8.89C27.215 5.52 24.475 2.79 21.105 2.79H9.29503Z"
        fill={colorsComplete.hasOwnProperty(fill) ? (colorsComplete as any)[fill].hex : "#000"}
      />
    </svg>
  );
};
export default InstagramIcon;
