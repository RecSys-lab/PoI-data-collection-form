import React, { FC } from "react";
import { Row, Col, Typography } from 'antd';
import { DemographicForm } from "./StepDemographic/DemographicForm";

const { Title } = Typography;

const StepDemographic: FC = () => {

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (<Row gutter={24}>
    <Col span={16}>
      <Title level={3}>Tell us about your self!</Title>
      <Title level={5}>Please enter your demographic information:</Title>
    </Col>
    <Col span={24} style={{marginTop: '12px'}}>
      <DemographicForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
      </Col>
    </Row>
  );
  };
  
  export default StepDemographic;

  // How muc movie + Social media + privacy + how much safar + age 20 toman pool bashe + 