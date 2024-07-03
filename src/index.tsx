import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import MainPage from "./pages/Global/MainPage";
import { Provider } from "jotai";
import { bbtStore } from "./atom";
import OurEvents from "./pages/Global/OurEvents";
import Test from "./pages/Global/Test";
import Blogs from "./pages/Global/Blogs";
import AboutUs from "./pages/Global/AboutUs";
import BlogDetail from "./pages/Global/BlogDetail";
import ContactUs from "./pages/Global/ContactUs";
import BbtAcademy from "./pages/Global/BbtAcademy";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Master = lazy(() => import("./pages/Global/Master"));
const AdminMaster = lazy(() => import("./pages/Admin/AdminMaster"));

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
            path: "/test",
            element: <Test />,
          },
        ],
      },
      {
        path: "/admin",
        element: <AdminMaster />,
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

root.render(
  <React.StrictMode>
    <Provider store={bbtStore}>
      <RouterProvider router={router} fallbackElement={<>Loading...</>} />
    </Provider>
  </React.StrictMode>
);
