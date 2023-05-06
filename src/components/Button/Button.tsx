import React from "react";
import { Button as AntBtn, ButtonProps } from "antd";
import styled from "styled-components";

const StyledButton = styled(AntBtn)`
  background-color: ${(props) => props.theme.white};
  border-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  &:focus {
    outline: none;
  }
`;

const Button = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
