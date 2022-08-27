import React from "react";
import { Input, InputNumber } from "antd";

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
    pRef,
    prefixIcon,
    suffixIcon,
    destructive = false,
    disable,
    addOnAfter,
    addOnBefore,
    allowClear = false,
    min,
    max,
    value,
    onChange,
  } = props;
  return (
    <div className={className}>
      <label htmlFor="" className="input-label">
        {label}
      </label>
      {type === enumInputType.NUMBER && (
        <InputNumber
          min={min}
          max={max}
          onChange={onChange}
          addonAfter={addOnAfter}
          addonBefore={addOnBefore}
          name={name}
          ref={pRef}
          placeholder={placeholder}
          prefix={prefixIcon ? prefixIcon : <span />}
          status={destructive === true ? "error" : ""}
          disabled={disable}
        />
      )}
      {type !== enumInputType.NUMBER && (
        <Input
          type={type}
          addonAfter={addOnAfter}
          addonBefore={addOnBefore}
          name={name}
          ref={pRef}
          placeholder={placeholder}
          prefix={prefixIcon ? prefixIcon : <span />}
          suffix={suffixIcon ? suffixIcon : <span />}
          status={destructive === true ? "error" : ""}
          disabled={disable}
          allowClear={allowClear}
          value={value}
          onChange={onChange}
        />
      )}
      <p className="hint-text">{hintText}</p>
    </div>
  );
};
