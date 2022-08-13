import { enumInputType } from "@enums/components";
import { ReactNode } from "react";
import { IHandleChange } from "./form";

export interface ICustomInput {
  type?: enumInputType;
  label?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  hintText?: string;
  destructive?: boolean;
  disable?: boolean;
  addOnAfter?: string;
  addOnBefore?: string;
  allowClear?: boolean;
  value?: string;
  onChange?: IHandleChange;
}
