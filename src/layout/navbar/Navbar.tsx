import React from "react";
import { Menu, MenuProps } from "antd";
import { Link } from "react-router-dom";
import { QuestionOutlined } from "@ant-design/icons";
import styled from "styled-components";

import { QUESTION, QUESTION_ADD, QUESTION_EDIT } from "@routes";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Questions", "question", <QuestionOutlined />, [
    getItem(<Link to={QUESTION}>Your all questions</Link>, QUESTION),
    getItem(<Link to={QUESTION_ADD}>Add new question</Link>, QUESTION_ADD),
    getItem(<Link to={QUESTION_EDIT}>Edit a question</Link>, QUESTION_EDIT),
  ]),
];

export const Navbar = () => {
  return (
    <StyledNavbar>
      <Menu mode="inline" theme="light" items={items} />
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div<{
  isMobile?: boolean;
}>`
  width: 300px;
`;
