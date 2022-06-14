import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Header } from "./components";
import { ProfilePage, ChatPage, GistsPage } from "./pages";
import { CustomThemeProvider } from "./theme-context";
import { store, persistor } from "./store";
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CustomThemeProvider>
          <BrowserRouter>
            <Header />

            <Routes>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/chat/*" element={<ChatPage />} />
              <Route path="/" element={<ProfilePage />} />
              <Route path="/gists" element={<GistsPage />} />
              <Route path="*" element={<h1>404</h1>} />
            </Routes>
          </BrowserRouter>
        </CustomThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
