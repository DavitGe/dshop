import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "../../components/Logo";
import Menu from "./Menu";
import { Input } from "antd";
import { BsCart, BsPerson, BsList } from "react-icons/bs";
import { Modal } from "antd";
import MobileMenu from "./MobileMenu";
import Wrapper from "../../components/Wrapper";
import { useNavigate } from "react-router-dom";
import { cart } from "../../utils/GlobalStorage";

const StyledWrapper = styled(Wrapper)`
  height: 80px;
  /* width: 100%; */

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding-right: 12px;
  @media (max-width: 1424px) {
    margin-inline: 12px;
  }

  @media (max-width: 1023px) {
    /* justify-content: end; */
  }
`;

const UtilitesWrapper = styled.div`
  height: 80px;

  position: relative;
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

const CartSizeStyled = styled.span`
  position: absolute;
  cursor: pointer;
  right: -12px;
  bottom: 50%;
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.theme.effect};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 2px;
`;

const Header = () => {
  const [open, setOpen] = useState(false);
  const [cartSize, setCartSize] = useState(0);
  const cartData = cart((state: any) => state.data);
  const navigate = useNavigate();

  useEffect(() => {
    const temp = cartData.reduce((sum: number, el: any) => {
      return sum + el.count;
    }, 0);
    setCartSize(temp);
  }, [cartData]);

  const modalOpen = () => {
    setOpen(true);
  };

  const onCancel = () => {
    setOpen(false);
  };
  return (
    <StyledWrapper>
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
        <StyledUser />
        <StyledCart onClick={() => navigate("/cart")} />
        {cartSize !== 0 && (
          <CartSizeStyled onClick={() => navigate("/cart")}>
            {cartSize}
          </CartSizeStyled>
        )}
      </UtilitesWrapper>
    </StyledWrapper>
  );
};

export default Header;
