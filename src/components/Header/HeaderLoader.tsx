import { Skeleton } from "@mui/material";
import "../../styles/components/Header/Header.scss";
import { motion } from "framer-motion";

type Props = {};

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

const HeaderLoader = ({}: Props) => {
  return (
    <header className="Header">
      <div className="container custom-container ">
        <motion.div
          className="texts textsLoading"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={animatedItem}>
            <Skeleton
              variant="text"
              sx={{ fontSize: window.innerWidth <= 1024 ? ".8rem" : ".9rem" }}
            />
          </motion.div>
          <motion.div variants={animatedItem}>
            <Skeleton
              variant="text"
              sx={{ fontSize: window.innerWidth <= 1024 ? "2rem" : "3rem" }}
            />
          </motion.div>
          <motion.div variants={animatedItem}>
            <Skeleton
              variant="text"
              sx={{ fontSize: window.innerWidth <= 1024 ? ".9rem" : "1rem" }}
            />
          </motion.div>
          <motion.div variants={animatedItem}>
            <Skeleton variant="rounded" width={160} height={45} />
          </motion.div>
        </motion.div>
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

export default HeaderLoader;
