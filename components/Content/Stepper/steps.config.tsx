import React from "react";
import StepDemographic from "./StepDemographic";
import StepPersonal from "./StepPersonal";
import StepRecommendation from "./StepRecommendation";
import { UserOutlined, SolutionOutlined, CheckOutlined } from '@ant-design/icons';

interface Step {
    title: string;
    content: JSX.Element;
    icon: JSX.Element;
}

export const steps: Step[] = [
    {
      title: 'Demographic Information',
      content: <StepDemographic />,
      icon: <UserOutlined />,
    },
    {
      title: 'Personal Information',
      content: <StepPersonal />,
      icon: <SolutionOutlined />,
    },
    {
      title: 'Recommendation',
      content: <StepRecommendation />,
      icon: <CheckOutlined />
    },
  ];