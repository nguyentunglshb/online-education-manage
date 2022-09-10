import React, { useCallback } from "react";
import { useFormik } from "formik";

import { CustomButton, CustomInput, CustomSelect, ToastBox } from "@components";
import { CustomRadio } from "@components/customRadio/CustomRadio";
import { level } from "@utils";
import { StyledAdd } from "./style";

export const AddQuestion = () => {
  const handleSearch = useCallback((values: string) => {
    console.log(values);
  }, []);

  const options = [
    {
      value: "Math",
      label: "Math",
    },
    {
      value: "Science",
      label: "Science",
    },
  ];

  const addquestionFormik = useFormik({
    initialValues: {
      subject: "",
      level: "",
      questionName: "",
      // multiSelect: 0,
      // answers: {
      firstAnswer: "",
      secondAnswer: "",
      thirdAnswer: "",
      fourthAnswer: "",
      // },
      correctAnswer: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const formatAnswerOptions = (
    answer1st = "",
    answer2nd = "",
    answer3rd = "",
    answer4th = ""
  ) => {
    return Array(0).push(answer1st, answer2nd, answer3rd, answer4th);
  };

  const { firstAnswer, secondAnswer, thirdAnswer, fourthAnswer } =
    addquestionFormik.values;

  console.log(
    formatAnswerOptions(firstAnswer, secondAnswer, thirdAnswer, fourthAnswer)
  );

  return (
    <StyledAdd>
      <ToastBox />
      <form onSubmit={addquestionFormik.handleSubmit}>
        <CustomInput
          label="Question name"
          name="questionName"
          onChange={addquestionFormik.handleChange}
        />
        <CustomSelect
          showSearch={true}
          placeholder="Choose 1 subject"
          onSearch={handleSearch}
          options={options}
          label="Subject"
        />
        <CustomSelect
          showSearch={true}
          placeholder="Choose a level"
          onSearch={handleSearch}
          options={level}
          label="Level"
        />
        {/* <CustomRadio
          label="Mutil select"
          type="button"
          options={mutilSelect}
          onChange={addquestionFormik.handleChange}
          name="multiSelect"
          value={addquestionFormik.values.multiSelect}
        /> */}
        <CustomInput
          placeholder="Answer 1"
          value={addquestionFormik.values.firstAnswer}
          onChange={addquestionFormik.handleChange}
          name="firstAnswer"
        />
        <CustomInput
          placeholder="Answer 2"
          value={addquestionFormik.values.secondAnswer}
          onChange={addquestionFormik.handleChange}
          name="secondAnswer"
        />

        <CustomInput
          placeholder="Answer 3"
          value={addquestionFormik.values.thirdAnswer}
          onChange={addquestionFormik.handleChange}
          name="thirdAnswer"
        />

        <CustomInput
          placeholder="Answer 4"
          value={addquestionFormik.values.fourthAnswer}
          onChange={addquestionFormik.handleChange}
          name="fourthAnswer"
        />

        <CustomRadio
          type="button"
          // options={}
          name="correctAnswer"
          value={addquestionFormik.values.correctAnswer}
          onChange={addquestionFormik.handleChange}
        />

        <CustomButton text="Add" htmlType="submit" />
      </form>
    </StyledAdd>
  );
};
