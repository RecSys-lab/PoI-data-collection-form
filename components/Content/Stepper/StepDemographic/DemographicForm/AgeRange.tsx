import React, { FC } from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

export const AgeRange: FC = () => {
    return <Form.Item
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
}