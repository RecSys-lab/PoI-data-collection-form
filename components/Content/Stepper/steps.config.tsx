import React from "react";
import StepDemographic from "./StepDemographic";
import StepPersonal from "./StepPersonal";
import StepRecommendation from "./StepRecommendation";

interface Step {
    title: string;
    content: JSX.Element;
}

export const steps: Step[] = [
    {
      title: 'Demographic Information',
      content: <StepDemographic />,
    },
    {
      title: 'Personal Information',
      content: <StepPersonal />,
    },
    {
      title: 'Recommendation',
      content: <StepRecommendation />,
    },
  ];