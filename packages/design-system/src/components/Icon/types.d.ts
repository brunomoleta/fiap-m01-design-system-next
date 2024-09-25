import {colors} from "@/tokens";

export type BaseIconProps = {
  width: number;
  height: number;
};

export type FillIconProps = BaseIconProps & {
  fill: keyof typeof colors;
  stroke?: never;
};

export type StrokeIconProps = BaseIconProps & {
  stroke: keyof typeof colors;
  fill?: never;
};

export type IconProps = FillIconProps | StrokeIconProps;
