import { useState } from "react";
import GlobalStyle from "./theme/globalStyles";
import { ThemeProvider } from "styled-components";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { ConfigProvider } from "antd";

import { light } from "./theme/theme";
import Logo from "./components/Logo";
import Home from "./views/Home/Home";

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
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </ConfigProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
