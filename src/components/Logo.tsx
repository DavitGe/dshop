import React from "react";
import styled from "styled-components";

const LogoText = styled.h1`
  padding: 6px;

  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.body};
  font-weight: 700;

  cursor: pointer;

  /* box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3); */
`;

const Logo = () => {
  return <LogoText>DShop</LogoText>;
};

export default Logo;
