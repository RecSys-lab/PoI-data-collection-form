import React, { FC } from 'react';
import { Form, Checkbox } from 'antd';

interface PrivacyCheckboxProps {
  onCheckboxClick(checked: boolean): void;
}

export const PrivacyCheckbox: FC<PrivacyCheckboxProps> = ({ onCheckboxClick }) => {
  const onChange = (e) => {
    onCheckboxClick(e.target.checked);
  }

  return <Form.Item
    name="privacy"
    rules={[{ required: true, message: 'You need to confirm privacy conditions' }]}
  >
    <Checkbox onChange={onChange}>
      I accept the privacy conditions
    </Checkbox>
  </Form.Item>
}