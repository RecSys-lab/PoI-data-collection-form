import React, { FC, ReactNode } from "react";
import styled from 'styled-components';

import PageHeader from './Header';

import { Layout, Menu } from 'antd';
const { Header } = Layout;

interface LayoutProps {
  children: ReactNode;
};

const PageLayout: FC<LayoutProps> = (props) => (
  <AppContainer>
    <Header className="header">
      <PageHeader defaultTab='1' />
    </Header>
    {props.children}
  </AppContainer>
);

export default PageLayout;

const AppContainer = styled.div``;