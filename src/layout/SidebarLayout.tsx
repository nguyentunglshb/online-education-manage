import React from "react";
import styled from "styled-components";
import { ILayout } from "./DefaultLayout";
import { Header } from "./header/Header";
import { Navbar } from "./navbar/Navbar";

export const SidebarLayout = ({ children }: ILayout) => {
  return (
    <StyledSidebar>
      <Header />
      <div className="container">
        <Navbar />
        {children}
      </div>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div<{
  isMobile?: boolean;
}>`
  width: 100%;
  .container {
    display: flex;
  }
`;
