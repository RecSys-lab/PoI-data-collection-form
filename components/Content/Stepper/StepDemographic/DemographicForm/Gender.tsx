import React, { FC } from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

export const Gender: FC = () => {
    return <Form.Item
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
}