import React from "react";
import { styled } from "styled-components";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  margin: 0 24px;
`;

const NavLeftItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const NavRightItems = styled.div``;

interface TopNavProps {
  leftItems?: React.ReactNode[];
  rightItems?: React.ReactNode[];
}

const TopNav = ({ leftItems, rightItems }: TopNavProps) => {
  return (
    <NavContainer>
      <NavLeftItems>{leftItems}</NavLeftItems>
      <NavRightItems>{rightItems}</NavRightItems>
    </NavContainer>
  );
};

export default TopNav;
