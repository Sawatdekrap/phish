import React from "react";
import { styled } from "styled-components";
import * as styles from "../styles";

const Button = styled.button<{
  type?: "primary" | "secondary";
  wide?: boolean;
}>`
  background-color: ${(props) =>
    !props.type || props.type === "primary"
      ? styles.COLOR_BUTTON_PRIMARY
      : styles.COLOR_BUTTON_SECONDARY};
  color: ${styles.COLOR_TEXT_LIGHT};
  display: flex;
  align-items: center;
  border: 2px solid transparent;
  border-radius: 6px;
  min-height: 44px;
  font-size: 16px;
  font-weight: 600;
  padding: 0 16px;
  justify-content: center;
  ${(props) => props.wide && "width: 100%"}
`;

export default Button;
