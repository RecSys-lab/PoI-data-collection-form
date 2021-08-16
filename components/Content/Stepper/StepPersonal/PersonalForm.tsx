import { FC, useState } from "react";
import { Form, Select } from 'antd';
import { RequiredMark } from "antd/lib/form/Form";
import { personalQuestionBag } from "./personalQuestionBag";

const { Option } = Select;

export const PersonalForm: FC = () => {
    const [form] = Form.useForm();

    const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');

    const onRequiredTypeChange = ({ requiredMarkValue }: { requiredMarkValue: RequiredMark }) => {
        setRequiredMarkType(requiredMarkValue);
      };

    return <Form form={form} layout="vertical"  initialValues={{ requiredMarkValue: requiredMark }}
        onValuesChange={onRequiredTypeChange} requiredMark={requiredMark}
        >
            {
                personalQuestionBag.map((item, key) => {
                    return <Form.Item key={key} label={item.question} required>
                    <Select>
                        {item.options.map((option, index) => {
                           return <Option key={index} value={option}>{option}</Option>
                        })}
                    </Select>
                </Form.Item>
                })
            }
    </Form>
}