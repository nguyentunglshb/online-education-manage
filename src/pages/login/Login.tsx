import React from "react";
import { useFormik } from "formik";

import { CustomButton, CustomInput } from "@components";
import { StyledLogin } from "./style";
import { UserIcon } from "@assets/icons/baseIcon/BaseIcons";
import { enumInputType } from "@enums/components";
import { authAPI } from "@api/authAPI";
import { ITeacherLogin } from "@interfaces";
import { popupToast, ToastBox } from "@components";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { HOME, SIGNUP } from "@routes";
import { isUserLoggedIn, setTokenToLocalStorage } from "@utils";

export const Login = () => {
  const navigate = useNavigate();
  const isAuth = isUserLoggedIn();
  const location = useLocation();

  const loginFormik = useFormik({
    initialValues: {
      teacherName: "",
      password: "",
    },
    onSubmit: (values) => {
      loginAsTeacher(values);
    },
  });

  const loginAsTeacher = async (values: ITeacherLogin) => {
    try {
      const res: any = await authAPI.loginAsTeacher(values);
      console.log(res);
      await popupToast({
        text: res.message,
        type: "success",
      });
      setTokenToLocalStorage(res.accessToken);
      navigate(HOME);
    } catch (error) {
      console.log(error);
      popupToast({
        text: "Something when wrong",
        type: "error",
      });
    }
  };

  return isAuth ? (
    <Navigate to={HOME} state={{ from: location }} replace />
  ) : (
    <StyledLogin>
      <ToastBox />
      <form onSubmit={loginFormik.handleSubmit}>
        <CustomInput
          label="Teacher name"
          prefixIcon={<UserIcon />}
          name="teacherName"
          value={loginFormik.values.teacherName}
          onChange={loginFormik.handleChange}
        />
        <CustomInput
          label="Password"
          prefixIcon={<UserIcon />}
          name="password"
          type={enumInputType.PASSWORD}
          value={loginFormik.values.password}
          onChange={loginFormik.handleChange}
        />
        <CustomButton htmlType="submit" text="Login" />
      </form>
      <Link to={SIGNUP}>Have no account? Sign up</Link>
    </StyledLogin>
  );
};
