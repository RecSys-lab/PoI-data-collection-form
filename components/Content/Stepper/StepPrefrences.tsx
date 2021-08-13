import React, { FC } from "react";
import { Row, Col } from 'antd';
import { Image } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

const StepPrefrences: FC = () => {
  return <Row gutter={24}>
    <Col span={16}>
      <Title level={3}>Let us know more about you!</Title>
      <Title level={5}>Please choose your prefrences from the list below:</Title>
    </Col>
    <Col span={8}>
    <Image
      width={400}
      preview={false}
      src="/tourism.png"
    />
    </Col>
  </Row>
  };
  
  export default StepPrefrences;