import React from "react";
import StepDemographic from "./StepDemographic";
import StepPersonal from "./StepPersonal";
import StepRecommendation from "./StepRecommendation";
import { UserOutlined, SolutionOutlined, CheckOutlined } from '@ant-design/icons';

interface Step {
    title: string;
    icon: JSX.Element;
    content: JSX.Element;
}

export const steps: Step[] = [
    {
      title: 'Demographic Data',
      content: <StepDemographic />,
      icon: <UserOutlined />,
    },
    {
      title: 'Personal Data',
      content: <StepPersonal />,
      icon: <SolutionOutlined />,
    },
    {
      title: 'Recommendation',
      content: <StepRecommendation />,
      icon: <CheckOutlined />
    },
  ];