import React, { FC, ReactNode } from "react";
import dynamic from 'next/dynamic';
import { Layout } from 'antd';
import { Content } from "antd/lib/layout/layout";
import { FooterComponent } from "./Footer";
import { BackTop } from 'antd';

interface LayoutProps {
  children: ReactNode;
};

const DynamicComponentWithNoSSR = dynamic(
  () => import('./Header'),
  { ssr: false }
)

const PageLayout: FC<LayoutProps> = (props) => {

  return (
  <Layout>
    <BackTop duration={1000}/>
    <DynamicComponentWithNoSSR />
    <Content>
      <div>
        {props.children}
      </div>
    </Content>
    <FooterComponent />
  </Layout>
)
};

export default PageLayout;
