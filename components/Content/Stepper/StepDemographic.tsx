import React, { FC } from "react";
import { DemographicForm } from "./StepDemographic/DemographicForm";


const StepDemographic: FC = () => {

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <DemographicForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
  );
  };
  
  export default StepDemographic;

  // How muc movie + Social media + privacy + how much safar + age 20 toman pool bashe + 

  // Nationality
  // Where do you live
  // Are you student, w