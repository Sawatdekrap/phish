import React from "react";
import { styled } from "styled-components";
import * as styles from "../styles";

const Section = styled.div<{ type: "light" | "dark" }>`
  padding: 16px 16px 24px 16px;
  background-color: ${(props) =>
    props.type === "light"
      ? styles.COLOR_BACKGROUND_GREY
      : styles.COLOR_BACKGROUND_DARK};
  color: ${(props) =>
    props.type === "dark" ? styles.COLOR_TEXT_LIGHT : styles.COLOR_TEXT_DARK};
`;

const ThinSection = styled(Section)`
  padding: 0;
`;

const CenterSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export default Section;
export { CenterSection, ThinSection };
