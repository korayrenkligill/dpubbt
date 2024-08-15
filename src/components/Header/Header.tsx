import "../../styles/components/Header/Header.scss";
import { motion } from "framer-motion";

type Props = {
  message?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  image?: string;
  buttonEvent?: () => void;
};

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const animatedItem = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const Header = ({
  message,
  title,
  description,
  buttonText,
  image,
  buttonEvent,
}: Props) => {
  const handleButtonClick = () => {
    if (buttonEvent) {
      buttonEvent();
    }
  };
  return (
    <header className="Header">
      <div className="container custom-container ">
        <motion.div
          className="texts"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="message" variants={animatedItem}>
            {message}
          </motion.span>
          <motion.h1 variants={animatedItem}>{title}</motion.h1>
          <motion.p variants={animatedItem}>{description}</motion.p>
          {buttonText && (
            <motion.button onClick={handleButtonClick} variants={animatedItem}>
              {buttonText}
            </motion.button>
          )}
        </motion.div>
        <motion.div
          className="image"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.2 }}
        >
          <img src={image} alt="header image" loading="lazy" />
        </motion.div>
      </div>
      <img
        src="/images/Header/web.png"
        alt="front-end development shape"
        id="webShape"
        loading="lazy"
      />
      <img
        src="/images/Header/cloud.png"
        alt="back-end development shape"
        id="cloudShape"
        loading="lazy"
      />
      <img
        src="/images/Header/game.png"
        alt="game development shape"
        id="gameShape"
        loading="lazy"
      />
      <img
        src="/images/Header/security.png"
        alt="siber security shape"
        id="securityShape"
        loading="lazy"
      />
    </header>
  );
};

export default Header;
