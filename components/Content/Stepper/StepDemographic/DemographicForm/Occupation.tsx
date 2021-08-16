import React, { FC } from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

const occupationList = ['Aviation', 'Arts', 'Business', 'Education', 'Law Enforcement', 'Media', 'Medical', 'Service Industry', 'Technology', 'Other']

export const Occupation: FC = () => {
    return <Form.Item
    name="job"
    label="Your job lies in:"
    rules={[{ required: true, message: 'Please select a general' }]}
  >
    <Select
      placeholder="Please select your gender"
    >
      {
        occupationList.map((job, index) => {
          return <Option key={index} value={job}>{job}</Option>
        })
      }
    </Select>
  </Form.Item>
}