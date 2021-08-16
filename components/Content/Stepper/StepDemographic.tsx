import React, { FC } from "react";
import { Form, Button, Row, Col } from 'antd';
import { AgeRange } from "./StepDemographic/AgeRange";
import { Gender } from "./StepDemographic/Gender";
import { Country } from "./StepDemographic/Country";
import { Occupation } from "./StepDemographic/Occupation";

const StepDemographic: FC = () => {

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Row gutter={24}>
        <Col span={8}>
          <AgeRange />
        </Col>
        <Col span={8}>
          <Gender />
        </Col>
        <Col span={8}>
          <Country />
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={8}>
          <Occupation />
        </Col>
        <Col span={8}>
          <Gender />
        </Col>
        <Col span={8}>
          <Country />
        </Col>
      </Row>
      <Row>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
  };
  
  export default StepDemographic;

  // How muc movie + Social media + privacy + how much safar + age 20 toman pool bashe + 

  // Nationality
  // Where do you live
  // Are you student, w