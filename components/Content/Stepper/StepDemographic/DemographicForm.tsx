import React, { FC } from "react";
import { Form, Button, Row, Col } from 'antd';
import { AgeRange } from "./DemographicForm/AgeRange";
import { Gender } from "./DemographicForm/Gender";
import { Country } from "./DemographicForm/Country";
import { Occupation } from "./DemographicForm/Occupation";
import { PrivacyCheckbox } from "./DemographicForm/PrivacyCheckbox";


interface DemographicFormProps {
    onFinish: (values: any) => void
    onFinishFailed: (values: any) => void
}

export const DemographicForm: FC<DemographicFormProps> = ({onFinish, onFinishFailed}) => {
  const onCheckboxClick = (checked: boolean) => {
    console.log(checked);
  }

   return <Form
      name="basic"
      // labelCol={{ span: 8 }}
      // wrapperCol={{ span: 16 }}
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
      </Row>
      <Row gutter={24}>
        <Col span={8}>
          <PrivacyCheckbox onCheckboxClick={onCheckboxClick} />
        </Col>
      </Row>
      <Row>
        <Form.Item 
        // wrapperCol={{ offset: 8, span: 16 }}
        >
          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </Form.Item>
      </Row>
    </Form>
}