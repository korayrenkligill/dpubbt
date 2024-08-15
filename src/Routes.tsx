import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import code from "./testEvent.js";
import LoadingComponent from "./pages/Global/Loading";

const App = lazy(() => import("./App"));
const Master = lazy(() => import("./pages/Global/Master"));
const MainPage = lazy(() => import("./pages/Global/MainPage"));
const OurEvents = lazy(() => import("./pages/Global/OurEvents"));
const Test = lazy(() => import("./pages/Global/Test"));
const Blogs = lazy(() => import("./pages/Global/Blogs"));
const AboutUs = lazy(() => import("./pages/Global/AboutUs"));
const BlogDetail = lazy(() => import("./pages/Global/BlogDetail"));
const ContactUs = lazy(() => import("./pages/Global/ContactUs"));
const BbtAcademy = lazy(() => import("./pages/Global/BbtAcademy"));
const Login = lazy(() => import("./pages/Global/Login"));
const Register = lazy(() => import("./pages/Global/Register"));
const UserControl = lazy(() => import("./components/UserControl"));
const Profile = lazy(() => import("./pages/Global/Profile"));
const Projects = lazy(() => import("./pages/Global/Projects"));

const PageRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<LoadingComponent />}>
            <App />
          </Suspense>
        }
      >
        <Route
          path="/"
          element={
            <Suspense fallback={<LoadingComponent />}>
              <Master />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<LoadingComponent />}>
                <MainPage />
              </Suspense>
            }
          />
          <Route
            path="about-us"
            element={
              <Suspense fallback={<LoadingComponent />}>
                <AboutUs />
              </Suspense>
            }
          />
          <Route
            path="our-events"
            element={
              <Suspense fallback={<LoadingComponent />}>
                <OurEvents />
              </Suspense>
            }
          />
          <Route
            path="projects"
            element={
              <Suspense fallback={<LoadingComponent />}>
                <Projects />
              </Suspense>
            }
          />
          <Route
            path="bbt-academy"
            element={
              <Suspense fallback={<LoadingComponent />}>
                <BbtAcademy />
              </Suspense>
            }
          />
          <Route
            path="blog"
            element={
              <Suspense fallback={<LoadingComponent />}>
                <Blogs />
              </Suspense>
            }
          />
          <Route
            path="blog/:key"
            element={
              <Suspense fallback={<LoadingComponent />}>
                <BlogDetail />
              </Suspense>
            }
          />
          <Route
            path="contact-us"
            element={
              <Suspense fallback={<LoadingComponent />}>
                <ContactUs />
              </Suspense>
            }
          />
          <Route
            path="login"
            element={
              <Suspense fallback={<LoadingComponent />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="register"
            element={
              <Suspense fallback={<LoadingComponent />}>
                <Register />
              </Suspense>
            }
          />
          <Route
            path="profile/:id"
            element={
              <Suspense fallback={<LoadingComponent />}>
                <Profile />
              </Suspense>
            }
          />
          <Route
            path="test"
            element={
              <Suspense fallback={<LoadingComponent />}>
                <UserControl>
                  <Test />
                </UserControl>
              </Suspense>
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
