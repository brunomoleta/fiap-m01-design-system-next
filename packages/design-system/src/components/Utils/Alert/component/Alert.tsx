import { CloseIcon } from "../../../../components/Icon";

type Props = {
  bgColor: string;
  textColor?: string,
  text: string;
  callback: Function;
};


const Alert = ({ bgColor = "text-active", textColor = "text-revert", text, callback }: Props) => {
  return (
    <div className={`bg-${bgColor} p-spacing-md rounded-spacing-sm relative`}>
      <span className={`text-${textColor}`}>{text}</span>
      <div
        onClick={() => callback()}
        className="p-spacing-sm absolute top-0 right-0 cursor-pointer"
      >
        <CloseIcon
          height={12}
          width={12}
          fill="text-revert"
        />
      </div>
    </div>
  );
};

export default Alert;
