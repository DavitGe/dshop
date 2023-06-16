import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  margin-top: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
  @media (max-width: 768px) {
    column-gap: 84px;
    row-gap: 24px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

const ColTitle = styled.span`
  color: ${(props) => props.theme.white};
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 600;
  margin-bottom: 4px;
  width: 200px;
  margin-top: 16px;
  @media (max-width: 768px) {
    width: max-content;
    align-items: center;
    justify-content: center;
  }
`;

const ColText = styled.span`
  color: ${(props) => props.theme.grey};
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 400;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.white};
    transition: 0.2s;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Column>
          <ColTitle>Fashion</ColTitle>
          <ColText>Jeans</ColText>
          <ColText>Dresses</ColText>
          <ColText>Shirts</ColText>
          <ColText>Accesories</ColText>
          <ColText>Shoes</ColText>
          <ColText>Jewlery</ColText>
        </Column>
        <Column>
          <ColTitle>Support</ColTitle>
          <ColText>Store Locator</ColText>
          <ColText>Order Status</ColText>
          <ColText>Communitacion</ColText>
        </Column>
        <Column>
          <ColTitle>Company</ColTitle>
          <ColText>Customer Service</ColText>
          <ColText>Terms of Use</ColText>
          <ColText>Privacy</ColText>
          <ColText>Careers</ColText>
          <ColText>About</ColText>
        </Column>
        <Column>
          <ColTitle>Contact</ColTitle>
          <ColText>Email</ColText>
          <ColText>Telephone</ColText>
          <ColText>Address</ColText>
        </Column>
      </Container>
    </Wrapper>
  );
};

export default Footer;
