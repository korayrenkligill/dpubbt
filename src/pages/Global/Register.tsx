import { Button, Divider, TextField } from "@mui/material";
import "../../styles/pages/Global/LoginRegister/LoginRegister.scss";
import { useNavigate } from "react-router-dom";
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

const Register = (props: Props) => {
  const navigation = useNavigate();
  return (
    <motion.main
      className="register-page"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.header className="logo" variants={animatedItem}>
        <img src="/images/logo-bbt.png" alt="" />
      </motion.header>
      <form>
        <motion.div variants={animatedItem}>
          <TextField size="small" id="name" label="isim" variant="outlined" />
        </motion.div>
        <motion.div variants={animatedItem}>
          <TextField
            size="small"
            id="surname"
            label="soyisim"
            variant="outlined"
          />
        </motion.div>
        <motion.div variants={animatedItem}>
          <TextField
            size="small"
            id="email"
            label="e-posta"
            variant="outlined"
          />
        </motion.div>
        <motion.div variants={animatedItem}>
          <TextField
            size="small"
            id="password"
            label="şifre"
            type="password"
            variant="outlined"
          />
        </motion.div>
        <motion.div variants={animatedItem}>
          <TextField
            size="small"
            id="password-again"
            label="şifre tekrar"
            type="password"
            variant="outlined"
          />
        </motion.div>
        <div className="login-buttons">
          <motion.div variants={animatedItem}>
            <Button variant="contained" color="secondary">
              Kayıt Ol
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
            onClick={() => navigation("/login")}
          >
            Giriş Yap
          </Button>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Register;
