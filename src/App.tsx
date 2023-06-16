import { useState } from "react";
import GlobalStyle from "./theme/globalStyles";
import { ThemeProvider } from "styled-components";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { ConfigProvider } from "antd";

import { light } from "./theme/theme";
import Logo from "./components/Logo";
import Home from "./views/Home/Home";
import Footer from "./views/Footer/Footer";
import Header from "./views/Header/Header";
import Shop from "./views/Shop";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
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
    </div>
  );
}

export default App;
