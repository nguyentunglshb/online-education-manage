import { enumInputType } from "@enums/components";
import { ReactNode } from "react";
import { IHandleChange } from "./form";

export interface ICustomInput {
  type?: enumInputType;
  label?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  pRef?: any;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  hintText?: string;
  destructive?: boolean;
  disable?: boolean;
  addOnAfter?: string;
  addOnBefore?: string;
  allowClear?: boolean;
  value?: string;
  min?: number;
  max?: number;
  onChange?: IHandleChange;
}

export interface ICustomButton {
  htmlType?: "button" | "submit";
  text?: string;
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export interface ICustomOption {
  value?: string | boolean;
  label?: string;
}

export interface ICustomSelect {
  showSearch?: boolean;
  placeholder?: string;
  label?: string;
  optionFilterProp?: string;
  onChange?: IHandleChange;
  onSearch?: (value: string) => void;
  options?: ICustomOption[];
}

export interface ICustomRadioOption {
  value?: number | string;
  label?: string;
}

export interface ICustomRadio {
  label?: string;
  value?: number | string;
  name?: string;
  type?: "default" | "button";
  onChange?: IHandleChange;
  options?: ICustomRadioOption[];
}
