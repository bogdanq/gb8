import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material";
import { MessageList } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  myPalette: {
    color: "red",
  },
  palette: {
    // primary: {
    //   // main: "#ff0000",
    // },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MessageList />
    </ThemeProvider>
  </React.StrictMode>
);
