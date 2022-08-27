import React, { memo } from "react";
import { Select } from "antd";

import { ICustomSelect } from "@interfaces/components";

const { Option } = Select;

export const CustomSelect = memo((props: ICustomSelect) => {
  const {
    showSearch = false,
    placeholder,
    optionFilterProp,
    label,
    onChange,
    onSearch,
    options,
  } = props;
  return (
    <div>
      <p className="label">{label}</p>
      <Select
        showSearch={showSearch}
        placeholder={placeholder}
        optionFilterProp={optionFilterProp}
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          (option!.children as unknown as string)
            .toLowerCase()
            .includes(input.toLowerCase())
        }
      >
        {options?.map((option, index) => {
          return (
            <Option key={option.label} value={option.value}>
              {option.label}
            </Option>
          );
        })}
      </Select>
    </div>
  );
});
