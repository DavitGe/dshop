import React from "react";
import Header from "./components/Header/Header";
import styled from "styled-components";

import bg from "../../assets/bg.avif";
import Wrapper from "../../components/Wrapper";
import { Carousel } from "antd";
import Partners from "./components/Partners";
import Currated from "./components/Currated";
import FPage from "../../configs/homeCarousel/FPage";

const contentStyle: React.CSSProperties = {
  color: "#fff",
  textAlign: "center",
  background: "#174655",
  height: 400,
  textJustify: "auto",
  borderRadius: 7,
};

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Carousel>
        <FPage />
        <FPage />
        <FPage />
        <FPage />
      </Carousel>
      <Partners />
      <Currated />
    </Wrapper>
  );
};

export default Home;
