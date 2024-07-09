import { Button, Divider, TextField } from "@mui/material";
import "../../styles/pages/Global/LoginRegister/LoginRegister.scss";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSetAtom } from "jotai";
import { userAtom } from "../..";
import AdminTools from "../../components/AdminTools";

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

const Login = (props: Props) => {
  const navigation = useNavigate();

  const setUserRole = useSetAtom(userAtom);
  return (
    <motion.main
      className="login-page"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.header className="logo" variants={animatedItem}>
        <img src="/images/logo-bbt.png" alt="" />
      </motion.header>
      <form>
        <motion.div variants={animatedItem}>
          <TextField
            size="small"
            id="email"
            label="e-mail"
            variant="outlined"
          />
        </motion.div>
        <motion.div variants={animatedItem}>
          <TextField
            size="small"
            id="password"
            label="password"
            type="password"
            variant="outlined"
          />
        </motion.div>
        <div className="login-buttons">
          <motion.div variants={animatedItem}>
            <Button variant="contained" color="secondary">
              Giriş Yap
            </Button>
          </motion.div>
          <motion.div variants={animatedItem}>
            <Button variant="text" color="primary" size="small">
              Şifremi Unuttum
            </Button>
          </motion.div>
        </div>
      </form>
      <div className="or">
        <motion.div variants={animatedItem}>
          <Divider>veya</Divider>
        </motion.div>
        <motion.div variants={animatedItem}>
          <Button
            variant="text"
            color="primary"
            onClick={() => navigation("/register")}
          >
            Kayıt Ol
          </Button>
        </motion.div>
        <motion.div variants={animatedItem}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setUserRole(null)}
          >
            (Test) Clear User
          </Button>
        </motion.div>
        <motion.div variants={animatedItem}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setUserRole({ role: "user" })}
          >
            (Test) User
          </Button>
        </motion.div>
        <motion.div variants={animatedItem}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setUserRole({ role: "admin" })}
          >
            (Test) Admin
          </Button>
        </motion.div>
      </div>
      <AdminTools pageName="login" />
    </motion.main>
  );
};

export default Login;
