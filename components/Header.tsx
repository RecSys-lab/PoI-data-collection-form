import React, { FC } from "react";
import { Layout, Menu } from 'antd';
import Link from 'next/link'

const { Header } = Layout;

interface PageHeaderProps {
  defaultTab?: string;
};

const PageHeader: FC<PageHeaderProps> = ({ defaultTab = 'home' }) => {
  return <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[defaultTab]}>
        <Menu.Item key="home">
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="blog">
          <Link href="/blog">Blog</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link href="/about">About</Link>
        </Menu.Item>
      </Menu>
    </Header>
};

export default PageHeader;