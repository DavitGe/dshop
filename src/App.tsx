import { useState } from "react";
import GlobalStyle from "./theme/globalStyles";
import { ThemeProvider } from "styled-components";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { ConfigProvider } from "antd";

import { light } from "./theme/theme";
import Home from "./views/Home/Home";
import Footer from "./views/Footer/Footer";
import Header from "./views/Header/Header";
import Shop from "./views/Shop";
import styled from "styled-components";

const MainWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 1400px;
  @media (max-width: 1424px) {
    margin-inline: 12px;
  }

  @media (max-width: 1023px) {
    align-items: center;
  }
`;

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "rgb(23, 70, 85)",
          },
        }}
      >
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;
