import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuWrapper = styled.ul`
  height: 80px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 48px;

  list-style: none;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  li {
    a {
      color: ${(props) => props.theme.text};
      font-size: ${(props) => props.theme.fontmd};
      transition: 0.2s ease;
      &:hover {
        transition: 0.2s ease;
        color: ${(props) => props.theme.main};
      }
    }
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;

const MobileWrapper = styled.ul`
  margin-top: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  list-style: none;

  li {
    a {
      color: ${(props) => props.theme.text};
      font-size: ${(props) => props.theme.fontlg};
      font-weight: 600;
      transition: 0.2s ease;
      &:hover {
        transition: 0.2s ease;
        color: ${(props) => props.theme.main};
      }
    }
  }
`;

const Nav = styled(Link)``;

const Menu = (props: { mobile?: boolean }) => {
  return props.mobile ? (
    <MobileWrapper>
      <li>
        <Link to="/shop">Shop</Link>
      </li>
      <li>
        <Link to="">Sales</Link>
      </li>
      <li>
        <Link to="">New Arrival</Link>
      </li>
      <li>
        <Link to="">Brand</Link>
      </li>
    </MobileWrapper>
  ) : (
    <MenuWrapper>
      <li>
        <Link to="/shop">Shop</Link>
      </li>
      <li>
        <Link to="">Sales</Link>
      </li>
      <li>
        <Link to="">New Arrival</Link>
      </li>
      <li>
        <Link to="">Brand</Link>
      </li>
    </MenuWrapper>
  );
};

export default Menu;
