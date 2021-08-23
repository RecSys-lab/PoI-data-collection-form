import { FC, useState } from "react";
import { Radio } from 'antd';

interface RadioGroupProps {
    items: any;
}

export const RadioGroup: FC<RadioGroupProps> = ({ items }) => {
    const [selectedOption, setSelectedOption] = useState<number>(0);
    
    const onChange = (e) => {
        setSelectedOption(e.target.value)
    };
    
    return <Radio.Group
        options={items}
        onChange={onChange}
        value={selectedOption}
        optionType="button"
        size="small"
    />
}