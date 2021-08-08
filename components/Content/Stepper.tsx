import React, { FC, ReactNode } from "react";
import styled from 'styled-components';

import { Steps } from 'antd';
import { steps } from "./Stepper/steps.config";

const { Step } = Steps;

interface StepperProps {
  onChange: (current: number) => void;
};

const Stepper: FC<StepperProps> = ({onChange}) => {
  

  return <Steps size="small" current={1} onChange={onChange}>
  {steps.map((step, key) => {
    return <Step key={key} title={step.title} />
  })}
</Steps>
};

export default Stepper;

const AppContainer = styled.div``;