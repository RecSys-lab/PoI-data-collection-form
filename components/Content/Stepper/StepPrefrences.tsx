import React, { FC } from "react";
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import { PrefrencesCard } from "./StepPrefrences/PrefrencesCard";
import { rasht } from "$data/locations/rasht";
import { toLocationConverter } from "./StepPrefrences/PrefrencesCard/toLocationConverter";
import { roudkhanCastle } from "$data/locations/roudkhanCastle";

const { Title } = Typography;

const StepPrefrences: FC = () => {
  const item = toLocationConverter(rasht);
  const item2 = toLocationConverter(roudkhanCastle);

  return <Col span={24}>
      <Row gutter={24} style={{ display: "block"}}>
        <Title level={3}>Let us know more about you!</Title>
        <Title level={5}>Please choose your prefrences from the list below:</Title>
      </Row>
      <Row gutter={24}>
        <PrefrencesCard item={item} />
        <PrefrencesCard item={item2} />
      </Row>
    </Col>
  };
  
  export default StepPrefrences;