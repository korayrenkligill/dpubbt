import React from "react";
import "../../styles/components/Header/Header.scss";

type Props = {
  message?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  image?: string;
};

const Header = ({ message, title, description, buttonText, image }: Props) => {
  return (
    <header className="Header">
      <div className="container custom-container ">
        <div className="texts">
          <span>{message}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <button>{buttonText}</button>
        </div>
        <div className="image">
          <img src={image} alt="" />
        </div>
      </div>
      <img
        src="/images/Header/web.png"
        alt="front-end development shape"
        id="webShape"
      />
      <img
        src="/images/Header/cloud.png"
        alt="back-end development shape"
        id="cloudShape"
      />
      <img
        src="/images/Header/game.png"
        alt="game development shape"
        id="gameShape"
      />
      <img
        src="/images/Header/security.png"
        alt="siber security shape"
        id="securityShape"
      />
    </header>
  );
};

export default Header;
