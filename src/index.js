import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material";
import { MessageList, Layout, Header, ChatList } from "./components";
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
      <Layout
        messages={<MessageList />}
        header={<Header />}
        chats={<ChatList />}
      />
    </ThemeProvider>
  </React.StrictMode>
);
