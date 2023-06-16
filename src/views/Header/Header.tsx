import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../components/Logo";
import Menu from "./Menu";
import { Input } from "antd";
import { BsCart, BsPerson, BsList } from "react-icons/bs";
import { Modal } from "antd";
import MobileMenu from "./MobileMenu";

const Wrapper = styled.div`
  max-width: 1400px;
  height: 80px;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  position: relative;
  @media (max-width: 1424px) {
    margin-inline: 12px;
  }

  @media (max-width: 1023px) {
    /* justify-content: end; */
  }
`;

const UtilitesWrapper = styled.div`
  height: 80px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;

  @media (max-width: 1064px) {
    gap: 16px;
  }
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

const LogoContainer = styled.div`
  @media (max-width: 1023px) {
    display: none;
  }
`;

const MenuIconWrapper = styled.div`
  cursor: pointer;
  display: none;

  @media (max-width: 1023px) {
    display: flex;
  }

  svg {
    font-size: 32px;
    color: ${(props) => props.theme.text};
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  const modalOpen = () => {
    setOpen(true);
  };

  const onCancel = () => {
    setOpen(false);
  };
  return (
    <Wrapper>
      <Modal
        open={open}
        onCancel={onCancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <MobileMenu />
      </Modal>
      <MenuIconWrapper onClick={modalOpen}>
        <BsList />
      </MenuIconWrapper>
      <LogoContainer>
        <Logo />
      </LogoContainer>
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
