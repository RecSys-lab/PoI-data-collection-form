import React, { FC, useState } from "react";
import { Col, Row, Rate } from "antd";
import { prefrencesBag } from "./prefrencesBag";

const desc = ['Totally Disagree', 'Disagree', 'So-So', 'Agree', 'Totally Agree'];

export const PreferencesItems: FC = () => {
    const numberOfItems = prefrencesBag.length;
    const [rateValue, setRateValue] = useState<number[]>([]);

    const handleChange = (value) => {
        setRateValue([value]);
    };
    
    return <Col span={24}>
        {prefrencesBag.map((item, index) => {
            return <Row gutter={24}>
                {item}
                <Rate tooltips={desc} onChange={() => handleChange(index)} value={rateValue[index]} />
            </Row>;
        })}
    </Col>
}