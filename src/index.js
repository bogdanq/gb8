import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Header } from "./components";
import { ProfilePage, ChatPage } from "./pages";
import { CustomThemeProvider } from "./theme-context";
import { store } from "./store";
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomThemeProvider>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/chat/*" element={<ChatPage />} />
            <Route path="/" element={<ProfilePage />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </BrowserRouter>
      </CustomThemeProvider>
    </Provider>
  </React.StrictMode>
);
