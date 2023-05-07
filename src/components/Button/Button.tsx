import React from "react";
import { Button as AntBtn, ButtonProps } from "antd";
import styled from "styled-components";

const StyledButton = styled(AntBtn)`
  background-color: ${(props: any) =>
    props.dark ? props.theme.text : props.theme.white};
  border-color: ${(props: any) =>
    props.dark ? props.theme.text : props.theme.white};
  color: ${(props: any) => (props.dark ? props.theme.white : props.theme.text)};
  &:focus {
    outline: none;
  }
  ${(props: any) =>
    props.dark &&
    `
    &:hover{
      background-color: ${props.theme.white};
      color: ${props.theme.text};
      transition: 0.2s;
    `}
`;

type btnProps = ButtonProps & {
  dark?: boolean;
};

const Button = (props: btnProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
