import { Link, NavLink, useNavigate } from "react-router-dom";
import { NavigationItemType } from "../../types/Navigation";
import { IoMenu, IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

import NavigationItems from "../../json/navigations.json";

import "../../styles/components/Navbar/Navbar.scss";
import { useCallback, useState } from "react";
import { userAtom } from "../..";
import { useAtomValue } from "jotai";
import UserAvatar from "../UserAvatar/UserAvatar";

type Props = {};

type NavigationItemProps = {
  item: NavigationItemType;
};

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.05,
    },
  },
};

const animatedItem = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const NavigationItem = ({ item }: NavigationItemProps) => {
  return (
    <motion.li className="link-item" variants={animatedItem}>
      <NavLink to={item.link} className="link">
        {item.title}
      </NavLink>
    </motion.li>
  );
};

const Navbar = (props: Props) => {
  const navigation = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const userRole = useAtomValue(userAtom);

  const changeNavbarState = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  return (
    <motion.nav
      variants={container}
      initial="hidden"
      animate="visible"
      className={isOpen ? "open" : "close"}
    >
      <motion.div className="mobile-menu" variants={animatedItem}>
        <img src="/images/logo-bbt.png" alt="logo" />
        <button onClick={changeNavbarState}>
          {!isOpen ? <IoMenu /> : <IoClose />}
        </button>
      </motion.div>
      <ul className="links" onClick={changeNavbarState}>
        {NavigationItems.map((item, index) => (
          <NavigationItem item={item} key={index} />
        ))}
      </ul>
      <div className={`${userRole ? "logged-in" : "not-logged-in"} auth`}>
        <div className="login-register" onClick={changeNavbarState}>
          <motion.div variants={animatedItem}>
            <Link to={"/login"} className="login">
              Giriş Yap
            </Link>
          </motion.div>
          <motion.div variants={animatedItem}>
            <Link to={"/register"} className="register">
              Kayıt Ol
            </Link>
          </motion.div>
        </div>
        <div className="user-panel">
          <div
            style={{ cursor: "pointer" }}
            className="user-informations"
            onClick={() => navigation("/profile/test")}
          >
            <p>Koray Renkligil</p>
            <span>Admin</span>
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => navigation("/profile/test")}
          >
            <UserAvatar name="Koray" surname="Renkligil" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
