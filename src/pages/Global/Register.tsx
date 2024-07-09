import { Button, Divider, TextField } from "@mui/material";
import "../../styles/pages/Global/Login/Login.scss";
import { useNavigate } from "react-router-dom";

type Props = {};

const Register = (props: Props) => {
  const navigation = useNavigate();
  return (
    <main className="login-page">
      <header className="logo">
        <img src="/images/logo-bbt.png" alt="" />
      </header>
      <form>
        <TextField size="small" id="name" label="isim" variant="outlined" />
        <TextField
          size="small"
          id="surname"
          label="soyisim"
          variant="outlined"
        />
        <TextField size="small" id="email" label="e-posta" variant="outlined" />
        <TextField
          size="small"
          id="password"
          label="şifre"
          type="password"
          variant="outlined"
        />
        <TextField
          size="small"
          id="password-again"
          label="şifre tekrar"
          type="password"
          variant="outlined"
        />
        <div className="login-buttons">
          <Button variant="contained" color="secondary">
            Kayıt Ol
          </Button>
        </div>
      </form>
      <div className="or">
        <Divider>veya</Divider>
        <Button
          variant="text"
          color="primary"
          onClick={() => navigation("/login")}
        >
          Giriş Yap
        </Button>
      </div>
    </main>
  );
};

export default Register;
