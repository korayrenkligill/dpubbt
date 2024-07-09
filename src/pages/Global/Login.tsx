import { Button, Divider, TextField } from "@mui/material";
import "../../styles/pages/Global/Login/Login.scss";
import { useNavigate } from "react-router-dom";

type Props = {};

const Login = (props: Props) => {
  const navigation = useNavigate();
  return (
    <main className="login-page">
      <header className="logo">
        <img src="/images/logo-bbt.png" alt="" />
      </header>
      <form>
        <TextField size="small" id="email" label="e-mail" variant="outlined" />
        <TextField
          size="small"
          id="password"
          label="password"
          type="password"
          variant="outlined"
        />
        <div className="login-buttons">
          <Button variant="contained" color="secondary">
            Giriş Yap
          </Button>
          <Button variant="text" color="primary" size="small">
            Şifremi Unuttum
          </Button>
        </div>
      </form>
      <div className="or">
        <Divider>veya</Divider>
        <Button
          variant="text"
          color="primary"
          onClick={() => navigation("/register")}
        >
          Kayıt Ol
        </Button>
      </div>
    </main>
  );
};

export default Login;
