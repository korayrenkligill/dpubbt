import { Link, NavLink } from "react-router-dom";
import { NavigationItemType } from "../../types/Navigation";
import { IoMenu, IoClose } from "react-icons/io5";

import NavigationItems from "../../json/navigations.json";

import "../../styles/components/Navbar/Navbar.scss";
import { useCallback, useState } from "react";

type Props = {};

type NavigationItemProps = {
  item: NavigationItemType;
};

const NavigationItem = ({ item }: NavigationItemProps) => {
  return (
    <li className="link-item">
      <NavLink to={item.link} className="link">
        {item.title}
      </NavLink>
    </li>
  );
};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const changeNavbarState = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  return (
    <nav className={isOpen ? "open" : "close"}>
      <div className="mobile-menu">
        <img src="/images/logo-bbt.png" alt="logo" />
        <button onClick={changeNavbarState}>
          {!isOpen ? <IoMenu /> : <IoClose />}
        </button>
      </div>
      <ul className="links" onClick={changeNavbarState}>
        {NavigationItems.map((item, index) => (
          <NavigationItem item={item} key={index} />
        ))}
      </ul>
      <div className="auth" onClick={changeNavbarState}>
        <Link to={"/login"} className="login">
          Giriş Yap
        </Link>
        <Link to={"/register"} className="register">
          Kayıt Ol
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
