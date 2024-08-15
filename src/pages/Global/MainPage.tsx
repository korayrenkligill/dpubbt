import { GoDot } from "react-icons/go";
import { LiaHashtagSolid } from "react-icons/lia";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import Header from "../../components/Header/Header";
import AboutTeam from "../../components/AboutTeam/AboutTeam";
import Event from "../../components/OurEvents/Events/Event";
import Lesson from "../../components/BbtAcademy/Lesson";
import BlogListItem from "../../components/Blog/BlogListItem";
import UserItem from "../../components/MainPage/UserItem/UserItem";
import AdminTools from "../../components/AdminTools";
import ContactForm from "../../components/ContactUs/ContactForm";

import "../../styles/pages/Global/MainPage/MainPage.scss";
import { useEffect, useState } from "react";
import HeaderLoader from "../../components/Header/HeaderLoader";
import { Skeleton } from "@mui/material";
import AboutTeamLoader from "../../components/AboutTeam/AboutTeamLoader";
import InfiniteCarousel from "../../components/CaruselTest";

// Bileşenleri tembel yükleme

type Props = {};

const MainPage = (props: Props) => {
  const { t } = useTranslation();
  const navigation = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];
  return (
    <main className="main">
      {loading ? (
        <HeaderLoader />
      ) : (
        <Header
          message={t("mainpage.header.message")}
          title={t("mainpage.header.title")}
          description={t("mainpage.header.description")}
          buttonText={t("mainpage.header.button")}
          image="/images/Header/anasayfa.svg"
          buttonEvent={() => {
            navigation("/contact-us");
          }}
        />
      )}
      {/*<h1>My Carousel</h1>*/}
      {/* <InfiniteCarousel visibleItems={3}>
        <div style={{ background: "red", height: "100px" }}>1</div>
        <div style={{ background: "blue", height: "100px" }}>2</div>
        <div style={{ background: "green", height: "100px" }}>3</div>
        <div style={{ background: "yellow", height: "100px" }}>4</div>
        <div style={{ background: "purple", height: "100px" }}>5</div>
        <div style={{ background: "purple", height: "100px" }}>6</div>
        <div style={{ background: "purple", height: "100px" }}>7</div>
      </InfiniteCarousel> */}
      <motion.div
        className="bar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="custom-container">
          {loading ? (
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          ) : (
            <span className="bar_content">
              Bilgisayar ve Bilişim Topluluğu olarak, sizlere daha iyi bir
              deneyim sunmak adına web sayfamızı yeniliyoruz. Kısa bir süre
              içerisinde yeni ve geliştirilmiş içeriğimizle karşınızda olacağız.
              Bizi takipte kalın!
            </span>
          )}
        </div>
      </motion.div>

      <div className="grid custom-container">
        <div className="content">
          <section className="lastest-events">
            <div className="container-title">
              {loading ? (
                <div style={{ width: "100%" }}>
                  <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
                  <Skeleton variant="text" sx={{ fontSize: ".5rem" }} />
                </div>
              ) : (
                <>
                  <div>
                    <h1 className="title-font">
                      <LiaHashtagSolid /> Son etkinliklerimiz
                    </h1>
                  </div>
                  <Link to="/our-events">
                    Dahası <GoChevronRight />
                  </Link>
                </>
              )}
            </div>
            <div className="events-container">
              {loading ? (
                <>
                  <Skeleton variant="rounded" height={200} />
                  <Skeleton variant="rounded" height={200} />
                  <Skeleton variant="rounded" height={200} />
                </>
              ) : (
                <>
                  <Event
                    title="Game Jam 2024"
                    date="11/10/2024"
                    emoji="🎮"
                    backgroundColor="#a4aeeb"
                    status="waiting"
                    url="https://gamejam2024.dpubbt.com/"
                  />
                  <Event
                    title="Hackathon 2023"
                    date="03/05/2023"
                    emoji="💻"
                    backgroundColor="#BAE1FF"
                    status="completed"
                  />
                  <Event
                    title="Code & Design 2"
                    date="02/03/2024"
                    emoji="🎨"
                    backgroundColor="#F1E1D6"
                    status="completed"
                  />
                </>
              )}
            </div>
          </section>

          <section className="trend-lesson">
            <div className="container-title">
              {loading ? (
                <div style={{ width: "100%" }}>
                  <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
                  <Skeleton variant="text" sx={{ fontSize: ".5rem" }} />
                </div>
              ) : (
                <>
                  <div>
                    <h1 className="title-font">
                      <LiaHashtagSolid /> Derslerimiz
                    </h1>
                  </div>
                  <Link to="/bbt-academy">
                    Dahası <GoChevronRight />
                  </Link>
                </>
              )}
            </div>
            <div className="lesson-container">
              {loading ? (
                <Skeleton variant="rounded" height={370} />
              ) : (
                <Lesson
                  image="https://i.ibb.co/f2FvnwL/lesson.png"
                  title="Full-stack Web Dersleri"
                  content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Exercitationem totam asperiores, quod quisquam"
                  topics={["Konu 1", "Konu 2", "Konu 3"]}
                  totalHour={60}
                  lessonCount={10}
                />
              )}
            </div>
          </section>

          {loading ? <AboutTeamLoader /> : <AboutTeam moreButton />}

          <section className="mainpage-contact">
            <div className="container-title">
              {loading ? (
                <div style={{ width: "100%" }}>
                  <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
                  <Skeleton variant="text" sx={{ fontSize: ".5rem" }} />
                </div>
              ) : (
                <>
                  <div>
                    <h1 className="title-font">
                      <LiaHashtagSolid /> İletişim Formu
                    </h1>
                  </div>
                  <Link to="/contact-us">
                    Dahası <GoChevronRight />
                  </Link>
                </>
              )}
            </div>
            {loading ? (
              <Skeleton variant="rounded" height={370} />
            ) : (
              <div>
                <p className="preprod-text">Bu Bölüm Yakında Aktif Olacak!</p>
                <ContactForm />
              </div>
            )}
          </section>
        </div>

        <div className="mainpage-sidebar">
          <section className="lastest-blog">
            <div className="container-title">
              {loading ? (
                <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
              ) : (
                <h1 className="title-font">Son paylaşılan yazı</h1>
              )}
            </div>
            <div className="blogs-container">
              {loading ? (
                <Skeleton variant="rounded" height={250} />
              ) : (
                <BlogListItem
                  image="https://i.pinimg.com/564x/33/2a/41/332a411f1f8e157a95d1ea679a2077a8.jpg"
                  categories={["Category 1", "Category 2"]}
                  date="01/01/2024"
                  title="Lorem ipsum dolor sit amet consectetur."
                  content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           Excepturi in libero dolore, pariatur, nostrum suscipit cum mollitia recusandae laudantium minus, amet nisi.
                           Corrupti non maiores odit ipsa placeat, perferendis excepturi, vitae officia obcaecati modi eveniet,
                           totam error repellendus nam iste. Velit quaerat recusandae nam quos quia voluptas vitae officiis doloribus."
                />
              )}
            </div>
          </section>

          <section className="lastest-users">
            <div className="container-title">
              {loading ? (
                <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
              ) : (
                <h1 className="title-font">Son Üyeler</h1>
              )}
            </div>
            <div className="users-container">
              {loading ? (
                <>
                  <Skeleton variant="rounded" height={60} />
                  <Skeleton variant="rounded" height={60} />
                  <Skeleton variant="rounded" height={60} />
                  <Skeleton variant="rounded" height={60} />
                  <Skeleton variant="rounded" height={60} />
                </>
              ) : (
                <>
                  <UserItem
                    name="Kaan"
                    surname="Özsavran"
                    role="T. Yönetim Kurulu Üyesi"
                  />
                  <UserItem
                    name="Koray"
                    surname="Renkligil"
                    role="T. Yönetim Kurulu Üyesi"
                  />
                  <UserItem
                    name="Kübra"
                    surname="Yeşil"
                    role="Başkan Yardımcısı"
                  />
                  <UserItem
                    name="Murat Han"
                    surname="Kocaman"
                    role="Topluluk Başkan Yardımcısı"
                  />
                  <UserItem
                    name="Okan"
                    surname="Alageyik"
                    role="Topluluk Başkanı"
                  />
                </>
              )}
            </div>
          </section>
        </div>
      </div>

      <AdminTools pageName="main" />
    </main>
  );
};

export default MainPage;
