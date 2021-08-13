import React, { FC } from "react";

import { Steps } from 'antd';
import { steps } from "./Stepper/steps.config";

const { Step } = Steps;

interface StepperProps {
  currentStep: number;
  onChange: (current: number) => void;
};

const Stepper: FC<StepperProps> = ({ currentStep, onChange }) => {
  return <div>
      <Steps size="small" current={currentStep} onChange={onChange}>
        {steps.map((step, key) => {
          return <Step key={key} title={step.title} icon={step.icon} />
        })}
      </Steps>
    </div>
};

export default Stepper;
