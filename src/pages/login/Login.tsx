import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { CustomInput } from "@components";

export const Login = () => {
  return (
    <div>
      <CustomInput
        label="Log in"
        placeholder="Enter your username"
        prefixIcon={<UserOutlined />}
      />
    </div>
  );
};
