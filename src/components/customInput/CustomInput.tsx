import React from "react";
import { Input } from "antd";

import { ICustomInput } from "@interfaces/components";
import { enumInputType } from "@enums/components";

export const CustomInput = (props: ICustomInput) => {
  const {
    type = enumInputType.TEXT,
    label,
    name,
    placeholder,
    className,
    hintText,
    prefixIcon,
    suffixIcon,
    destructive = false,
    disable,
    addOnAfter,
    addOnBefore,
    allowClear = false,
    value,
    onChange,
  } = props;
  return (
    <div className={className}>
      <label htmlFor="" className="input-label">
        {label}
      </label>
      <Input
        type={type}
        addonAfter={addOnAfter}
        addonBefore={addOnBefore}
        name={name}
        placeholder={placeholder}
        prefix={prefixIcon}
        suffix={suffixIcon}
        status={destructive === true ? "error" : ""}
        disabled={disable}
        allowClear={allowClear}
        value={value}
        onChange={onChange}
      />
      <p className="hint-text">{hintText}</p>
    </div>
  );
};
