import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import MainPage from "./pages/Global/MainPage";
import { Provider } from "jotai";
import { bbtStore } from "./atom";
import OurEvents from "./pages/Global/OurEvents";

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
            path: "/our-events",
            element: <OurEvents />,
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
    element: (
      <div>
        <Link to="/">
          Bu sayfa bulunamadı veya henüz yapım aşamasında lütfen tıklayarak ana
          sayfaya dönünüz
        </Link>
      </div>
    ),
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
