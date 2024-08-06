import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Master from "./pages/Global/Master";
import MainPage from "./pages/Global/MainPage";
import OurEvents from "./pages/Global/OurEvents";
import Test from "./pages/Global/Test";
import Blogs from "./pages/Global/Blogs";
import AboutUs from "./pages/Global/AboutUs";
import BlogDetail from "./pages/Global/BlogDetail";
import ContactUs from "./pages/Global/ContactUs";
import BbtAcademy from "./pages/Global/BbtAcademy";
import Login from "./pages/Global/Login";
import Register from "./pages/Global/Register";
import UserControl from "./components/UserControl";
import code from "./testEvent";
import Profile from "./pages/Global/Profile";

const PageRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Master />}>
          <Route index element={<MainPage />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="our-events" element={<OurEvents />} />
          <Route path="bbt-academy" element={<BbtAcademy />} />
          <Route path="blog" element={<Blogs />} />
          <Route path="blog/:key" element={<BlogDetail />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route
            path="test"
            element={
              <UserControl>
                <Test />
              </UserControl>
            }
          />
          <Route
            path="*"
            element={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                <Link to="/">
                  Bu sayfa bulunamadı veya henüz yapım aşamasında lütfen
                  tıklayarak ana sayfaya dönünüz
                </Link>
              </div>
            }
          />
        </Route>
        <Route
          path="event"
          element={<div dangerouslySetInnerHTML={{ __html: code }} />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default PageRoutes;
