import React, { CSSProperties, FC } from "react";
import styled from 'styled-components';
import Stepper from "./Content/Stepper";
import { steps } from "./Content/Stepper/steps.config";

export const ContentComponent: FC = () => {
    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
      };
    
      const prev = () => {
        setCurrent(current - 1);
      };

      const onChange = (current: number) => {
        setCurrent(current);
    }

    return <Container >
            <Stepper onChange={onChange} />
            <div className="steps-content">{steps[current].content}</div>
            
        </Container>
}

const Container = styled.div`
    padding: 24px 36px;
`;