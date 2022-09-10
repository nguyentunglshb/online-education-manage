import { ICustomButton } from "@interfaces/components";
import { Button } from "antd";
import React from "react";

export const CustomButton = (props: ICustomButton) => {
  const {
    htmlType = "button",
    text,
    icon,
    disabled = false,
    onClick,
    type = "default",
  } = props;
  return (
    <div>
      <Button
        disabled={disabled}
        onClick={onClick}
        htmlType={htmlType}
        type={type}
      >
        {!!icon && icon}
        {!!text && text}
      </Button>
    </div>
  );
};
