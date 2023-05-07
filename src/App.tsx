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

function App() {
  return (
    <div>
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
          </Routes>
          <Footer />
        </ConfigProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
