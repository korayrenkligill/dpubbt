import { Outlet } from "react-router-dom";
import "../../styles/pages/Global/Master.scss";

import { lazy } from "react";
import Footer from "../../components/Footer/Footer";

const Navbar = lazy(() => import("../../components/Navbar/Navbar"));

type Props = {};

const Master = (props: Props) => {
  console.log("master rendered");
  return (
    <div className="Master">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Master;
