import React, { useState } from "react";
import Button from "./elements/Button";
import Input from "./elements/Input";
import { Comment, H1 } from "./elements/Typography";
import Loading from "./icons/Loading";

export interface StepItf {
  stage: string;
  type: string;
  placeholder: string;
  hint: string;
}

export const STEPS: StepItf[] = [
  {
    stage: "Email",
    type: "string",
    placeholder: "john@example.com",
    hint: "Hint: enter an email we can send updates to in the future",
  },
  {
    stage: "Mobile Number",
    type: "number",
    placeholder: "0400 000 000",
    hint: "Hint: we need your number to confirm you are the intended recipient",
  },
  {
    stage: "Full name",
    type: "string",
    placeholder: "John Doe",
    hint: "Hint: the name should match the details listed on the missed deliveries",
  },
  {
    stage: "Address",
    type: "string",
    placeholder: "12 Fair Street, Sydney",
    hint: "Hint: tell us where to redirect deliveries in the future",
  },
  {
    stage: "Password",
    type: "password",
    placeholder: "Password",
    hint: "Hint: Enter any password you've used in the past to help us verify your identity",
  },
  {
    stage: "Card Number",
    type: "string",
    placeholder: "1234 5678 9012 3456",
    hint: "Hint: redelivering your missed (2) deliveries will cost $4.52",
  },
];

interface StepProps {
  stepIdx: number;
  onConfirm: () => void;
}

export const Step = ({ stepIdx, onConfirm }: StepProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const step = STEPS[stepIdx];
  const onTimeout = () => {
    setIsLoading(false);
    onConfirm();
  };

  const onClick = () => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(onTimeout, Math.random() + 1500);
  };

  return (
    <>
      <H1>Confirm your {step.stage}</H1>
      <Input
        key={step.stage}
        type={step.type}
        placeholder={step.placeholder}
        disabled={isLoading}
        inputButton={
          <Button onClick={onClick}>{isLoading ? Loading : "Confirm"}</Button>
        }
      />
      <Comment>{step.hint}</Comment>
    </>
  );
};
