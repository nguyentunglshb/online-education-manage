import { ICustomRadio } from "@interfaces/components";
import { Radio } from "antd";
import React, { memo } from "react";

export const CustomRadio = memo((props: ICustomRadio) => {
  const { label, value, name, onChange, options, type = "default" } = props;
  return (
    <div>
      <p className="label">{label}</p>
      <Radio.Group name={name} value={value} onChange={onChange}>
        {options?.map((option) => {
          return type === "default" ? (
            <Radio key={option.label} value={option.value}>
              {option.label}
            </Radio>
          ) : (
            <Radio.Button key={option.label} value={option.value}>
              {option.label}
            </Radio.Button>
          );
        })}
      </Radio.Group>
    </div>
  );
});
