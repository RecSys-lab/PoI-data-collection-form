import React, { CSSProperties, FC } from "react";
import styled from 'styled-components';
import Stepper from "./Content/Stepper";
import { steps } from "./Content/Stepper/steps.config";

export const ContentComponent: FC = () => {
    const [currentStep, setCurrentStep] = React.useState(1);

    const next = () => {
        setCurrentStep(currentStep + 1);
      };
    
      const prev = () => {
        setCurrentStep(currentStep - 1);
      };

      const onChange = (currentStep: number) => {
        setCurrentStep(currentStep);
    }

    return <Container >
        <Stepper onChange={onChange} currentStep={currentStep}/>
        <div className="steps-content">{steps[currentStep].content}</div>   
      </Container>
}

const Container = styled.div`
    padding: 24px 36px;
`;