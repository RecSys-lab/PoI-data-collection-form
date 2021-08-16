import React, { FC } from "react";
import { Row, Col, Typography } from 'antd';
import { Image } from 'antd';
import { PersonalForm } from "./StepPersonal/PersonalForm";

const { Title } = Typography;

const StepPersonal: FC = () => {
  return <Row gutter={24}>
    <Col span={16}>
      <Title level={3}>What are your personal attitudes?</Title>
      <Title level={5}>Please choose your prefrences from the list below:</Title>
      <PersonalForm />
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
  
  export default StepPersonal;