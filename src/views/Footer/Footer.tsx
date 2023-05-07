import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  padding: 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 32px;
  margin-bottom: 32px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ColTitle = styled.span`
  color: ${(props) => props.theme.white};
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 600;
  margin-bottom: 4px;
  width: 200px;
  margin-top: 16px;
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
