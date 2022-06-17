import { createContext, useCallback, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

export const ThemeContext = createContext("default value");

const themes = {
  dark: {
    color: "#000",
  },
  light: {
    color: "#fff",
  },
};

const themesMUI = {
  dark: createTheme({
    palette: {
      primary: {
        main: "#2b5278",
      },
    },
  }),
  light: createTheme({
    palette: {
      primary: {
        main: "#17212b",
      },
    },
  }),
};

export const CustomThemeProvider = ({ children, initialTheme = "light" }) => {
  const [theme, setTheme] = useState({
    theme: themes[initialTheme],
    name: initialTheme,
  });

  const themeSetter = useCallback((name) => {
    if (!!themes[name]) {
      setTheme({
        name,
        theme: themes[name],
      });
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, themeSetter }}>
      <ThemeProvider theme={themesMUI[theme.name]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
