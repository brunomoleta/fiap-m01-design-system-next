import { FillIconProps } from "@/components/Icon/types";
import { colorsComplete } from "../../../../../tokens";

const WhatsappIcon = (props: FillIconProps) => {
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
        d="M0.00499511 29.6L2.12499 21.68C0.924995 19.51 0.294995 17.08 0.294995 14.62C0.294995 6.56 6.85499 0 14.905 0C22.955 0 29.525 6.56 29.525 14.62C29.525 22.68 22.965 29.24 14.905 29.24C12.485 29.24 10.095 28.63 7.95499 27.47L-0.00500488 29.6H0.00499511ZM8.355 24.5L8.855 24.8C10.695 25.9 12.785 26.48 14.905 26.48C21.445 26.48 26.755 21.16 26.755 14.63C26.755 8.1 21.445 2.77 14.905 2.77C8.365 2.77 3.055 8.08 3.055 14.62C3.055 16.78 3.65499 18.9 4.785 20.77L5.095 21.27L3.915 25.69L8.355 24.5Z"
        fill={colorsComplete[fill].hex}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.345 16.65C19.745 16.29 18.965 15.89 18.255 16.18C17.715 16.4 17.365 17.25 17.015 17.69C16.835 17.91 16.615 17.95 16.345 17.84C14.305 17.03 12.745 15.66 11.615 13.79C11.425 13.5 11.455 13.27 11.685 13C12.025 12.6 12.455 12.14 12.545 11.6C12.635 11.06 12.385 10.43 12.165 9.95001C11.875 9.34001 11.565 8.46001 10.945 8.11001C10.375 7.79001 9.63503 7.97001 9.13503 8.38001C8.26503 9.09001 7.84503 10.2 7.85503 11.3C7.85503 11.61 7.89503 11.92 7.96503 12.23C8.14503 12.96 8.47503 13.63 8.85503 14.28C9.13503 14.77 9.44503 15.24 9.78503 15.69C10.875 17.17 12.235 18.46 13.805 19.42C14.595 19.9 15.435 20.32 16.315 20.61C17.295 20.93 18.175 21.27 19.235 21.07C20.345 20.86 21.445 20.17 21.885 19.1C22.015 18.78 22.085 18.43 22.005 18.1C21.855 17.41 20.915 17 20.355 16.66L20.345 16.65Z"
        fill={colorsComplete[fill].hex}
      />
    </svg>
  );
};

export default WhatsappIcon;
