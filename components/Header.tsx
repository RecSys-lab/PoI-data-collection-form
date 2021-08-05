import React, { FC, ReactNode } from "react";
import styled from 'styled-components';

import { Layout, Menu } from 'antd';
const { Header } = Layout;

interface PageHeaderProps {
  logo?: ReactNode;
  defaultTab: string;
};

const PageHeader: FC<PageHeaderProps> = ({defaultTab}) => {
    return <>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[defaultTab]}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Documents</Menu.Item>
            <Menu.Item key="3">About Us</Menu.Item>
        </Menu>
    </>
};

export default PageHeader;

const AppContainer = styled.div``;