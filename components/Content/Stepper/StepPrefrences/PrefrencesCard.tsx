import React, { FC, useState } from "react";
import { Card, Tooltip, Rate } from 'antd';
import { ILocation } from "./PrefrencesCard/ILocation";
import { InfoCircleOutlined } from '@ant-design/icons';
import { RadioGroup } from "./PrefrencesCard/RadioGroup";
import { partsOfTheDay } from "./PrefrencesCard/RadioGroup/partsOfTheDay";
import { weatherVariations } from "./PrefrencesCard/RadioGroup/weatherVariations";

const { Meta } = Card;

interface PrefrencesCardProps {
    item: ILocation;
}

export const PrefrencesCard: FC<PrefrencesCardProps> = ({ item }) => {
    const [rateValue, setRateValue] = useState<number>(0);

    console.log(rateValue);

    return <Card
            hoverable
            cover={<img alt={item.title} src={`${item.thumbnail}`} height={135}/>} >
                <Meta title={item.title} description={item.description} />
                <Rate onChange={setRateValue}/>
                <Tooltip title={item.richTextDescription}><InfoCircleOutlined /></Tooltip>
                <RadioGroup items={partsOfTheDay} />
                <RadioGroup items={weatherVariations} />
        </Card>
}