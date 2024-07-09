import { Outlet } from "react-router-dom";
import "./app.scss";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Outlet />
      <ScrollToTop />
    </div>
  );
}

export default App;
