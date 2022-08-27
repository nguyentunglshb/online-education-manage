import { ICustomButton } from "@interfaces/components";
import { Button } from "antd";
import React from "react";

export const CustomButton = (props: ICustomButton) => {
  const { htmlType = "button", text, icon, disabled = false, onClick } = props;
  return (
    <div>
      <Button disabled={disabled} onClick={onClick} htmlType={htmlType}>
        {!!icon && icon}
        {!!text && text}
      </Button>
    </div>
  );
};
