import React, { FC, ReactNode } from "react";
import styled from 'styled-components';

import { Steps } from 'antd';
import { steps } from "./Stepper/steps.config";

const { Step } = Steps;

interface StepperProps {
  currentStep: number;
  onChange: (current: number) => void;
};

const Stepper: FC<StepperProps> = ({ currentStep, onChange }) => {
  return <AppContainer>
      <Steps size="small" current={currentStep} onChange={onChange}>
        {steps.map((step, key) => {
          return <Step key={key} title={step.title} icon={step.icon} />
        })}
      </Steps>
    </AppContainer>
};

export default Stepper;

const AppContainer = styled.div`
  margin-bottom: 24px;
`;