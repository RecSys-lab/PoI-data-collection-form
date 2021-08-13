import React from "react";
import StepDemographic from "./StepDemographic";
import StepPersonal from "./StepPersonal";
import StepPrefrences from "./StepPrefrences";
import StepRecommendation from "./StepRecommendation";
import { UserOutlined, SolutionOutlined, CheckOutlined, HeartOutlined } from '@ant-design/icons';

interface Step {
    title: string;
    icon: JSX.Element;
    content: JSX.Element;
}

export const steps: Step[] = [
    {
      title: 'Demographic',
      content: <StepDemographic />,
      icon: <UserOutlined />,
    },
    {
      title: 'Personality Assessment',
      content: <StepPersonal />,
      icon: <SolutionOutlined />,
    },
    {
      title: 'Preference Eliciation',
      content: <StepPrefrences />,
      icon: <HeartOutlined />,
    },
    {
      title: 'Recommendation and Evaluation',
      content: <StepRecommendation />,
      icon: <CheckOutlined />
    },
  ];