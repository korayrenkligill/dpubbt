import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { atom, Provider } from "jotai";
import { bbtStore } from "./atom";
import { createTheme } from "@mui/material/styles";
import "./i18n";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "react-quill/dist/quill.snow.css";

import { ThemeProvider } from "@emotion/react";
import { UserType } from "./types/User";
import PageRoutes from "./Routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = createTheme({
  palette: {
    primary: {
      light: "#005df3",
      main: "#024ec7",
      dark: "#003fa5",
      contrastText: "#fff",
    },
    secondary: {
      light: "#287bff",
      main: "#0b65f3",
      dark: "#004fcf",
      contrastText: "#fff",
    },
  },
});

export const userAtom = atom<UserType | null>(null);

root.render(
  <React.StrictMode>
    <Provider store={bbtStore}>
      <ThemeProvider theme={theme}>
        <PageRoutes />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
