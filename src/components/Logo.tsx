import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoText = styled.h1`
  padding: 6px;

  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  font-weight: 700;

  cursor: pointer;

  /* box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3); */
`;

const Logo = () => {
  return (
    <Link to="/">
      <LogoText>DShop</LogoText>
    </Link>
  );
};

export default Logo;
