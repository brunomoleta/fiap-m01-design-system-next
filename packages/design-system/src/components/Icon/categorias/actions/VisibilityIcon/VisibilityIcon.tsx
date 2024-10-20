import { FillIconProps } from "../../../types";
import { colorsComplete } from "../../../../../tokens";

const VisibilityIcon = (props: FillIconProps) => {
  const { height, width, fill } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <title>Visibilidade ativa</title>
      <path
        d="M12 17C13.25 17 14.3127 16.5627 15.188 15.688C16.0627 14.8127 16.5 13.75 16.5 12.5C16.5 11.25 16.0627 10.1873 15.188 9.312C14.3127 8.43733 13.25 8 12 8C10.75 8 9.68733 8.43733 8.812 9.312C7.93733 10.1873 7.5 11.25 7.5 12.5C7.5 13.75 7.93733 14.8127 8.812 15.688C9.68733 16.5627 10.75 17 12 17ZM12 15.2C11.25 15.2 10.6127 14.9373 10.088 14.412C9.56267 13.8873 9.3 13.25 9.3 12.5C9.3 11.75 9.56267 11.1123 10.088 10.587C10.6127 10.0623 11.25 9.8 12 9.8C12.75 9.8 13.3877 10.0623 13.913 10.587C14.4377 11.1123 14.7 11.75 14.7 12.5C14.7 13.25 14.4377 13.8873 13.913 14.412C13.3877 14.9373 12.75 15.2 12 15.2ZM12 20C9.56667 20 7.35 19.3207 5.35 17.962C3.35 16.604 1.9 14.7833 1 12.5C1.9 10.2167 3.35 8.39567 5.35 7.037C7.35 5.679 9.56667 5 12 5C14.4333 5 16.65 5.679 18.65 7.037C20.65 8.39567 22.1 10.2167 23 12.5C22.1 14.7833 20.65 16.604 18.65 17.962C16.65 19.3207 14.4333 20 12 20Z"
        fill={colorsComplete.hasOwnProperty(fill) ? (colorsComplete as any)[fill].hex : "#000"}
      />
    </svg>
  );
};

export default VisibilityIcon;
