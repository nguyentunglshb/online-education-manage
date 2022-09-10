import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";

export interface ILayout {
  children?: ReactNode | ReactElement;
}

export const DefaultLayout = ({ children }: ILayout) => {
  return (
    <StyledDefaultLayout>
      <Header />
      {children}
      <Footer />
    </StyledDefaultLayout>
  );
};

const StyledDefaultLayout = styled.div<{
  isMobile?: boolean;
}>`
  width: 100%;
`;
