import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

import { authAPI } from "@api/authAPI";
import { UserIcon } from "@assets/icons/baseIcon/BaseIcons";

import { CustomButton, CustomInput, popupToast, ToastBox } from "@components";
import { enumInputType } from "@enums/components";
import { ISignUpTeacher } from "@interfaces";
import { StyledSignUp } from "./style";
import { LOGIN } from "@routes";

export const SignUp = () => {
  const signupFormik = useFormik({
    initialValues: {
      teacherName: "",
      password: "",
    },
    onSubmit: (values) => {
      createTeacherAccount(values);
    },
  });

  const createTeacherAccount = async (values: ISignUpTeacher) => {
    try {
      const res: any = await authAPI.createTeacherAccount(values);
      console.log(res);
      await popupToast({
        text: res.message,
        type: "success",
      });
    } catch (error) {
      console.log(error);
      popupToast({
        text: "Something when wrong",
        type: "error",
      });
    }
  };

  return (
    <StyledSignUp>
      <ToastBox />
      <form onSubmit={signupFormik.handleSubmit}>
        <CustomInput
          label="Teacher name"
          prefixIcon={<UserIcon />}
          name="teacherName"
          value={signupFormik.values.teacherName}
          onChange={signupFormik.handleChange}
        />
        <CustomInput
          label="Password"
          prefixIcon={<UserIcon />}
          name="password"
          type={enumInputType.PASSWORD}
          value={signupFormik.values.password}
          onChange={signupFormik.handleChange}
        />
        <CustomButton htmlType="submit" text="Sign up" />
      </form>
      <Link to={LOGIN}>Have an account? Log in</Link>
    </StyledSignUp>
  );
};
