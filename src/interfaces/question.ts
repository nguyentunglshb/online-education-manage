export interface ICreateQuestion {
  subject: string;
  level: "primarySchool" | "juniorHighSchool" | "highSchool" | "university";
  questionName?: string;
  answers: string[];
  correctAnser: string[];
}
