import { ISignUpTeacher, ITeacherLogin } from "@interfaces";
import axiosClient from "./axiosClient";

export const authAPI = {
  loginAsTeacher: (body: ITeacherLogin) => {
    const url = `/api/teacher/login`;
    return axiosClient.post(url, body);
  },
  createTeacherAccount: (body: ISignUpTeacher) => {
    const url = `/api/teacher/createAccount`;
    return axiosClient.post(url, body);
  },
};
