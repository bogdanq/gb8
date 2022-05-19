import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { ProfilePage, ChatPage } from "./pages";
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  myPalette: {
    color: "red",
  },
  palette: {},
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chat/*" element={<ChatPage />} />
          <Route path="/" element={<ProfilePage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
