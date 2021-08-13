import React, { FC } from "react";
import { Row, Col } from 'antd';
import { Image } from 'antd';

const StepPrefrences: FC = () => {
  return <Row gutter={24}>
    <Col span={16}>
      That
    </Col>
    <Col span={8}>
    <Image
      width={400}
      src="/tourism.png"
    />
    </Col>
  </Row>
  };
  
  export default StepPrefrences;