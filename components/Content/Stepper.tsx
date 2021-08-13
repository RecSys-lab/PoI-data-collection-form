import React, { CSSProperties, FC } from "react";
import { Row, Col } from 'antd';
import { Steps } from 'antd';
import { steps } from "./Stepper/steps.config";

const { Step } = Steps;

interface StepperProps {
  currentStep: number;
  onChange: (current: number) => void;
};

const Stepper: FC<StepperProps> = ({ currentStep, onChange }) => {
  return <Row> <Col span={24} style={ContainerStyle}>
      <Steps size="small" current={currentStep} onChange={onChange}>
        {steps.map((step, key) => {
          return <Step key={key} title={step.title} icon={step.icon} />
        })}
      </Steps>
    </Col>
    </Row>
};

export default Stepper;

const ContainerStyle: CSSProperties = {
  marginBottom: '12px',
}
