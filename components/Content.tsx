import React, { CSSProperties, FC } from "react";
import Stepper from "./Content/Stepper";
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { steps } from "./Content/Stepper/steps.config";

export const ContentComponent: FC = () => {
    const [currentStep, setCurrentStep] = React.useState(0);

    const next = () => {
        setCurrentStep(currentStep + 1);
      };
    
      const prev = () => {
        setCurrentStep(currentStep - 1);
      };

      const onChange = (currentStep: number) => {
        setCurrentStep(currentStep);
    }

    return <Row >
      <Col span={24} style={ContainerStyle}>
        <Stepper onChange={onChange} currentStep={currentStep}/>
        <Card>
          {steps[currentStep].content}
        </Card>
        </Col>
      </Row>
}

const ContainerStyle: CSSProperties = {}