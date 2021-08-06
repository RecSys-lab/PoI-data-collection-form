import React, { FC, ReactNode } from "react";
import styled from 'styled-components';

import { Layout } from 'antd';
import { Content } from "antd/lib/layout/layout";
import { FooterComponent } from "./Footer";

interface LayoutProps {
  children: ReactNode;
};
const { Header } = Layout;

const PageLayout: FC<LayoutProps> = (props) => {

  return (
  <Layout>
    <Header>header</Header>
    {/* <Sider>left sidebar</Sider> */}
    <Content>{props.children}</Content>
    {/* <Sider>right sidebar</Sider> */}
    <FooterComponent />
  </Layout>
)
};

export default PageLayout;

const AppContainer = styled.div``;