import React from "react";
import styled from "styled-components";

export const AllQuestions = () => {
  return <StyledQuestions>AllQuestions</StyledQuestions>;
};

const StyledQuestions = styled.div<{
  isMobile?: boolean;
}>`
  width: 100%;
`;
