import React, { FC } from "react";
import { Form, InputNumber, Button, Select, Row, Col } from 'antd';

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
            label="Age"
            rules={[{ required: true, message: 'Please enter your age' }]}
          >
            <InputNumber min={5} max={99} placeholder='Please enter your age' style={{ width: '100%' }}/>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="sex"
            label="Sex"
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
      </Row>
      <Row>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
  };
  
  export default StepDemographic;