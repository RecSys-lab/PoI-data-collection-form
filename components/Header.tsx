import React, { FC, ReactNode } from "react";
import styled from 'styled-components';

import { Layout, Menu } from 'antd';
const { Header } = Layout;

interface PageHeaderProps {
  logo?: ReactNode;
  defaultTab?: string;
};

const PageHeader: FC<PageHeaderProps> = ({ defaultTab = 'home' }) => {
  return <Header>
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[defaultTab]}>
      <Menu.Item key="home">Home</Menu.Item>
      <Menu.Item key="blog">Blog and Updates</Menu.Item>
      <Menu.Item key="about">About</Menu.Item>
    </Menu>
  </Header>
};

export default PageHeader;

const AppContainer = styled.div``;