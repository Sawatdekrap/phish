import React, { useState } from "react";
import { styled } from "styled-components";
import * as styles from "../../styles";
import Close from "../../icons/Close";

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const Background = styled.div`
  flex-basis: 80%;
  background-color: ${styles.COLOR_BACKGROUND_GREY};
`;

const Backdrop = styled.div`
  flex: auto;
  background-color: #000;
  opacity: 0.75;
`;

interface SidePanelProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const SidePanel = ({ isOpen, onClose, children }: SidePanelProps) => {
  if (!isOpen) return null;

  return (
    <Wrapper>
      <Background>{children}</Background>
      <Backdrop onClick={onClose}>
        <div
          style={{
            width: "20px",
            height: "20px",
            color: "white",
            left: "20px",
            top: "20px",
            position: "relative",
          }}
        >
          {Close}
        </div>
      </Backdrop>
    </Wrapper>
  );
};

export default SidePanel;
