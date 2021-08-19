import React, { FC, useState } from "react";
import { Col, Row, Rate, Typography } from "antd";
import { prefrencesBag } from "./prefrencesBag";

const { Text } = Typography;

const tooltips = ['Totally Disagree', 'Disagree', 'So-So', 'Agree', 'Totally Agree'];

export const PreferencesItems: FC = () => {
    const initiateRateIndices = new Array(prefrencesBag.length).fill(0);
    const [rateValue, setRateValue] = useState<number[]>(initiateRateIndices);    

    const handleChange = (item: any, index: number) => {
        console.log(item, index);
        setRateValue([...rateValue, index]);
    };
    
    return <Col span={24}>
        {prefrencesBag.map((item, index) => {
            return <Row gutter={24} key={index}>
                <Col span={16} style={{ margin: 'auto 0' }}>
                    <Text style={{ fontSize: '16px' }}>{item}</Text>
                </Col>
                <Col span={8}>
                    <Rate tooltips={tooltips} onChange={(item) => handleChange(item, index)}/>
                </Col>
            </Row>;
        })}
    </Col>
}