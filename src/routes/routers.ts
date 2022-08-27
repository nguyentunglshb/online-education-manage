import { AddQuestion, Home, Login, SignUp } from "@pages";
import { HOME, LOGIN, QUESTION_ADD, SIGNUP } from "./fn";

export const publicRoutes = [
  {
    path: HOME,
    name: "home",
    component: Home,
  },
  {
    path: LOGIN,
    name: "login",
    component: Login,
  },
  {
    path: SIGNUP,
    name: "signup",
    component: SignUp,
  },
];

export const privateRoutes = [
  {
    path: QUESTION_ADD,
    name: "question_add",
    component: AddQuestion,
  },
];
