import React from "react";
import Header from "./components/Header/Header";
import styled from "styled-components";

import bg from "../../assets/bg.avif";
import Wrapper from "../../components/Wrapper";
import { Carousel } from "antd";
import Partners from "./components/Partners";

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
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <Partners />
    </Wrapper>
  );
};

export default Home;
