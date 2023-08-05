import React, { useState } from "react";
import { styled } from "styled-components";
import * as styles from "../styles";

const InputWrapper = styled.div`
  margin: 16px 0;
  border-radius: 6px;
  padding: 8px 6px 8px 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${styles.COLOR_BACKGROUND_WHITE};
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  color: ${styles.COLOR_TEXT_DARK};
  font-size: 16px;
  width: 100%;
`;

interface InputProps {
  inputButton?: React.ReactNode;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
}

const Input = ({
  inputButton,
  type = "text",
  placeholder = "",
  disabled = false,
}: InputProps) => {
  const [value, setValue] = useState("");

  return (
    <InputWrapper>
      <StyledInput
        value={value}
        type={type}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
      />
      {inputButton}
    </InputWrapper>
  );
};

export default Input;
