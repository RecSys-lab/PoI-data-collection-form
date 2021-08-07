import React, { FC, ReactNode } from "react";
import dynamic from 'next/dynamic';
import styled from 'styled-components';

import { Layout, Menu } from 'antd';
import { Content } from "antd/lib/layout/layout";
import { FooterComponent } from "./Footer";

interface LayoutProps {
  children: ReactNode;
};
const { Header } = Layout;

const DynamicComponentWithNoSSR = dynamic(
  () => import('./Header'),
  { ssr: false }
)

const PageLayout: FC<LayoutProps> = (props) => {

  return (
  <Layout>
    <DynamicComponentWithNoSSR />
    <Content>
      <AppContainer>
        {props.children}
      </AppContainer>
    </Content>
    <FooterComponent />
  </Layout>
)
};

export default PageLayout;

const AppContainer = styled.div`
  height: 90vh;
`;