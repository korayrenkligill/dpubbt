import { Link, NavLink } from "react-router-dom";
import { NavigationItemType } from "../../types/Navigation";
import { IoMenu, IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

import NavigationItems from "../../json/navigations.json";

import "../../styles/components/Navbar/Navbar.scss";
import { useCallback, useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="auth" onClick={changeNavbarState}>
        <motion.span variants={animatedItem}>
          <Link to={"/login"} className="login">
            Giriş Yap
          </Link>
        </motion.span>
        <motion.span variants={animatedItem}>
          <Link to={"/register"} className="register">
            Kayıt Ol
          </Link>
        </motion.span>
      </div>
    </motion.nav>
  );
};

export default Navbar;
