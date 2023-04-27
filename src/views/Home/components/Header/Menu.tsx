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
        color: ${(props) => props.theme.secondary};
      }
    }
  }
`;

const Nav = styled(Link)``;

const Menu = () => {
  return (
    <MenuWrapper>
      <li>
        <Link to="">Shop</Link>
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
