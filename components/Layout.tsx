import React, { CSSProperties, FC, ReactNode } from "react";
import dynamic from 'next/dynamic';
import { Layout } from 'antd';
import { Content } from "antd/lib/layout/layout";
import { FooterComponent } from "./Footer";
import { BackTop } from 'antd';
import { Row, Col } from 'antd';

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
      <Row>
        <Col span={24} style={ContainerStyle}>
          {props.children}
        </Col>
      </Row>
    </Content>
    <FooterComponent />
  </Layout>
)
};

export default PageLayout;

const ContainerStyle: CSSProperties = {
  padding: '24px',
  height: '100vh'
}