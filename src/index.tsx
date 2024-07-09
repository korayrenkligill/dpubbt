import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { atom, Provider } from "jotai";
import { bbtStore } from "./atom";
import { createTheme } from "@mui/material/styles";
import "./i18n";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "react-quill/dist/quill.snow.css";

import Master from "./pages/Global/Master";
import MainPage from "./pages/Global/MainPage";
import OurEvents from "./pages/Global/OurEvents";
import Test from "./pages/Global/Test";
import Blogs from "./pages/Global/Blogs";
import AboutUs from "./pages/Global/AboutUs";
import BlogDetail from "./pages/Global/BlogDetail";
import ContactUs from "./pages/Global/ContactUs";
import BbtAcademy from "./pages/Global/BbtAcademy";
import Login from "./pages/Global/Login";
import Register from "./pages/Global/Register";
import { ThemeProvider } from "@emotion/react";
import UserControl from "./components/UserControl";
import { UserType } from "./types/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Master />,
        children: [
          {
            path: "/",
            element: <MainPage />,
          },
          {
            path: "/about-us",
            element: <AboutUs />,
          },
          {
            path: "/our-events",
            element: <OurEvents />,
          },
          {
            path: "/bbt-academy",
            element: <BbtAcademy />,
          },
          {
            path: "/blog",
            element: <Blogs />,
          },
          {
            path: "/blog/:key",
            element: <BlogDetail />,
          },
          {
            path: "/contact-us",
            element: <ContactUs />,
          },
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },
          {
            path: "/test",
            element: (
              <UserControl>
                <Test />
              </UserControl>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Master />,
    children: [
      {
        path: "*",
        element: (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "1rem",
            }}
          >
            <Link to="/">
              Bu sayfa bulunamadı veya henüz yapım aşamasında lütfen tıklayarak
              ana sayfaya dönünüz
            </Link>
          </div>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = createTheme({
  palette: {
    primary: {
      light: "rgb(36, 159, 190)",
      main: "rgb(40, 141, 167)",
      dark: "rgb(35, 117, 137)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgb(19, 104, 153)",
      main: "rgb(24, 96, 139)",
      dark: "rgb(16, 76, 110)",
      contrastText: "#fff",
    },
  },
});

export const userAtom = atom<UserType | null>(null);

root.render(
  <React.StrictMode>
    <Provider store={bbtStore}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} fallbackElement={<>Loading...</>} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
