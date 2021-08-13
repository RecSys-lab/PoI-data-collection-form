import React, { FC } from "react";
import { Form, InputNumber, Button, Select, Row, Col } from 'antd';
import { CountryNames } from "./StepDemographic/countryNames";

const { Option } = Select;

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
          <Form.Item
            name="age"
            label="Your Age"
            rules={[{ required: true, message: 'Please enter your age' }]}
          >
            <Select
              placeholder="Please select your age"
            >
              <Option value="AG1">Less than 20</Option>
              <Option value="AG2">Between 20-30</Option>
              <Option value="AG3">Between 30-40</Option>
              <Option value="AG4">Between 40-50</Option>
              <Option value="AG5">Over 50</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="sex"
            label="Your Sex"
            rules={[{ required: true, message: 'Please enter your sex' }]}
          >
            <Select
              placeholder="Please select your gender"
            >
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
              <Option value="Other">Prefer not to say</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="country"
            label="You are from:"
            rules={[{ required: true, message: 'Please choose your country' }]}
          >
            <Select
              placeholder="Please choose your country"
            >
              {Object.keys(CountryNames).map((country, key) => {
                return <Option key={key} value={country}>{country}</Option>
              })}
            </Select>
          </Form.Item>
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