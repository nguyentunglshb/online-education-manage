import { BulbOutlined, CloudFilled } from "@ant-design/icons";
import { CustomButton } from "@components";
import { PageHeader } from "antd";
import React from "react";
import styled from "styled-components";

export const Header = () => {
  const routes = [
    {
      path: "index",
      breadcrumbName: "First-level Menu",
    },
    {
      path: "first",
      breadcrumbName: "Second-level Menu",
    },
    {
      path: "second",
      breadcrumbName: "Third-level Menu",
    },
  ];

  const actionButtons = [
    <CustomButton text="Dark" icon={<CloudFilled />} type="primary" />,
    <CustomButton text="Light" icon={<BulbOutlined />} />,
  ];

  return (
    <StyledHeader>
      <PageHeader
        // className="site-page-header"
        title="Title"
        breadcrumb={{ routes }}
        extra={actionButtons}
      />
    </StyledHeader>
  );
};

const StyledHeader = styled.div<{
  isMobile?: boolean;
}>`
  width: 100%;
`;
