import { DefaultLayout, SidebarLayout } from "@layout";
import { AddQuestion, AllQuestions, Home, Login, SignUp } from "@pages";
import { HOME, LOGIN, QUESTION, QUESTION_ADD, SIGNUP } from "./fn";

export const publicRoutes = [
  {
    path: LOGIN,
    name: "login",
    component: Login,
    layout: DefaultLayout,
  },
  {
    path: SIGNUP,
    name: "signup",
    component: SignUp,
    layout: DefaultLayout,
  },
];

export const privateRoutes = [
  {
    path: HOME,
    name: "home",
    component: Home,
    layout: SidebarLayout,
  },
  {
    path: QUESTION,
    name: "questions",
    component: AllQuestions,
    layout: SidebarLayout,
  },
  {
    path: QUESTION_ADD,
    name: "question_add",
    component: AddQuestion,
    layout: SidebarLayout,
  },
];
