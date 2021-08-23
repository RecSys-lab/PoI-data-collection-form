import React, { FC, useState } from "react";
import { Card } from 'antd';
import { ILocation } from "./PrefrencesCard/ILocation";

const { Meta } = Card;

interface PrefrencesCardProps {
    item: ILocation;
}

export const PrefrencesCard: FC<PrefrencesCardProps> = ({ item }) => {
    // https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png
    console.log(item.thumbnail);
    
    return <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={item.title} src={`${item.thumbnail}`} />}
        >
    <Meta title={item.title} description={item.description} />
  </Card>
}