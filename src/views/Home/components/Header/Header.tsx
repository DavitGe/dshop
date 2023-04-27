import React from "react";
import styled from "styled-components";
import Logo from "../../../../components/Logo";
import Menu from "./Menu";
import { Input } from "antd";
import { BsCart, BsPerson } from "react-icons/bs";

const Wrapper = styled.div`
  max-width: 1400px;
  height: 80px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  position: relative;

  /* background-color: ${(props) => props.theme.main}; */
`;

const UtilitesWrapper = styled.div`
  height: 80px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
`;

const StyledCart = styled(BsCart)`
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontxl};
  margin-bottom: 2px;
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    transition: 0.2s ease;
    color: ${(props) => props.theme.secondary};
  }
`;

const StyledUser = styled(BsPerson)`
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontxl};
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    transition: 0.2s ease;
    color: ${(props) => props.theme.secondary};
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <Menu />
      <UtilitesWrapper>
        <Input placeholder="Search" />
        <StyledCart />
        <StyledUser />
      </UtilitesWrapper>
    </Wrapper>
  );
};

export default Header;
