import React, { FC } from 'react';
import { Form, Select } from 'antd';
import { CountryNames } from './Country/countryNames';

const { Option } = Select;

export const Country: FC = () => {
    return <Form.Item
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
}