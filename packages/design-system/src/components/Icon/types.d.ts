import {colors} from "@/tokens";

export type BaseIconProps = {
  width: number;
  height: number;
};

export type FillIconProps = BaseIconProps & {
  fill: keyof typeof colors;
  stroke?: never;
};

