import { ICreateQuestion } from "@interfaces/question";
import axiosClient from "./axiosClient";

export const questionAPI = {
  createQuestion: (body: ICreateQuestion) => {
    const url = `/question/createQuestion`;
    return axiosClient.post(url, body);
  },
  getAllQuestionsCreatedByTeacher: () => {
    const url = `/question/getAllQuestionsByTeacher`;
    return axiosClient.get(url);
  },
};
