import { Outlet } from "react-router-dom";
import "../../styles/pages/Global/Master.scss";

import { lazy } from "react";

const Navbar = lazy(() => import("../../components/Navbar/Navbar"));

type Props = {};

const Master = (props: Props) => {
  return (
    <div className="Master">
      <Navbar />
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};

export default Master;
