import React from "react";
import { styled } from "styled-components";

const Container = styled.a`
  display: flex;
  margin: 0 5px;
  padding: 2px 10px;
  text-decoration: none;
  font-size: 14px;
  color: inherit;
  height: 40px;
  align-items: center;
`;

const SidebarIcon = styled.div`
  width: 18px;
  height: 18px;
  margin-right: 16px;
  fill: currentColor;
`;

interface SidePanelProps {
  icon: React.ReactNode;
  text: string;
  link: string;
}

const SidePanelRow = ({ icon, text, link }: SidePanelProps) => {
  return (
    <Container href={link}>
      <SidebarIcon>{icon}</SidebarIcon>
      {text}
    </Container>
  );
};

export default SidePanelRow;
