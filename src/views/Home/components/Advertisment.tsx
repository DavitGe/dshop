import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Wrapper from "../../../components/Wrapper";
import add from "../../../assets/advertisment.jpg";
import Button from "../../../components/Button/Button";
import { BsArrowRight } from "react-icons/bs";
import { useQuery } from "@apollo/client";
import { GET_ADDS } from "../../../graphql/query";

const StyledWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  margin-top: 64px;
  height: 264px;
  background-color: ${(props) => props.theme.text};
  border-radius: 8px;
  gap: 48px;
  align-items: center;
  overflow: hidden;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

const StyledImg: any = styled.div`
  background-image: url(${(props: any) => props.img});
  background-size: cover;
  width: 60%;
  height: 100%;
  @media (max-width: 1064px) {
    width: 40%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 64px;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    margin-top: 0;
  }
`;

const Label = styled.span`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 16px;
  color: ${(props) => props.theme.white};
  opacity: 0.8;
`;

const Text = styled.p`
  font-weight: 800;
  color: ${(props) => props.theme.white};
  font-size: 32px;
  margin-top: 12px;
  margin-bottom: 24px;
  max-width: 340px;
  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }

  @media (max-width: 424px) {
    font-size: 24px;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: ${(props) => props.theme.fontmd};
    font-weight: 600;
  }
`;

const Advertisment = () => {
  const query = useQuery(GET_ADDS);
  const [addData, setAddData] = useState({
    type: "",
    text: "",
    buttonText: "",
    img: "",
  });
  useEffect(() => {
    if (!query.loading) {
      console.log("query", query);
      setAddData(query.data.advertisements[0]);
    }
  }, [query]);

  useEffect(() => {
    console.log("addData", addData);
  }, [addData]);
  return (
    <StyledWrapper>
      <>
        <StyledImg img={addData.img} />
        <AddContainer>
          <Label>{addData.type}</Label>
          <Text>{addData.text}</Text>
          <Button style={{ height: 48, width: 216 }}>
            <BtnWrapper>
              <span>{addData.buttonText}</span>
              <BsArrowRight fontSize={16} />
            </BtnWrapper>
          </Button>
        </AddContainer>
      </>
    </StyledWrapper>
  );
};

export default Advertisment;
