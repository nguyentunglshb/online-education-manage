import {
  enumCheckItemDesktopSize,
  enumCheckItemFont,
  enumCheckItemMobileSize,
  enumCircleSize,
  enumDevice,
  enumFeaturedIconSize,
  enumFeaturedIconStatus,
  enumIconColor,
  enumMiscellaneousIconSize,
  enumPaymentMethodIconHeight,
  enumPaymentMethodIconWidth,
} from "../enums/components";

export interface IBaseIcon {
  width?: number | string;
  height?: number | string;
  size?: number;
  color?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  thickness?: number;
}

export interface IFeaturedIcon {
  color?: enumIconColor | string;
  size?: enumFeaturedIconSize | number;
  width?: number;
  height?: number;
  onClick?: () => void;
  status?: enumFeaturedIconStatus;
  className?: string;
}

export interface IFeaturedOutlineIcon {
  color?: enumIconColor;
  size?: number;
  onClick?: () => void;
}

export interface IStarIcon {
  size?: enumMiscellaneousIconSize | number;
  percent: number;
  onClick?: () => void;
}

export interface ICheckIcon {
  size?: enumMiscellaneousIconSize | number;
  onClick?: () => void;
}

export interface ICheckTextItem {
  device?: enumDevice;
  size?: enumCheckItemDesktopSize | enumCheckItemMobileSize | number;
  onClick?: () => void;
  color?: enumIconColor;
  text?: string;
  textFont?: enumCheckItemFont;
}

export interface ICircleIcon {
  size?: enumCircleSize;
  color?: string;
  className?: string;
}

export interface IClockIcon {
  size?: number;
  color?: string;
  className?: string;
}

export interface IPropsSocialIcon {
  color?: string;
  svgClassName?: string;
  pathClassName?: string;
  isDefault?: boolean;
  onClick?: () => void;
  className?: string;
  size?: number;
  width?: number;
  height?: number;
  strokeColor?: string;
}
export interface IPropsPaymentMethodIcon {
  width?: enumPaymentMethodIconWidth | number;
  height?: enumPaymentMethodIconHeight | number;
  size?: number;
  className?: string;
  color?: string;
  fillOpacity?: number;
}
