import Header from "../../components/Header/Header";
import AboutTeam from "../../components/AboutTeam/AboutTeam";
import Event from "../../components/OurEvents/Events/Event";
import Lesson from "../../components/BbtAcademy/Lesson";

import "../../styles/pages/Global/MainPage/MainPage.scss";
import BlogListItem from "../../components/Blog/BlogListItem";
import Slider from "react-slick";
import { GoDot } from "react-icons/go";
import { LiaHashtagSolid } from "react-icons/lia";
import UserItem from "../../components/MainPage/UserItem/UserItem";

type Props = {};

const MainPage = (props: Props) => {
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} rightArrow`}
        style={{
          ...style,
          display: "block",
          right: "0",
          zIndex: "4",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} leftArrow`}
        style={{
          ...style,
          display: "block",
          left: "0",
          zIndex: "4",
        }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    speed: 500,
    autoplaySpeed: 2000,
    className: "center",
    centerPadding: "60px",
    swipeToSlide: true,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <></>,
          prevArrow: <></>,
        },
      },
    ],
  };
  return (
    <main className="main">
      <Header
        message="👋 Topluluğumuza Hoşgeldin!"
        title="Bilgisayar ve Bilişim Topluluğu"
        description="İnovasyon ve Öğrenmeye Adanmış Bir Aile"
        buttonText="İletişime Geç"
        image="https://i.ibb.co/PjxVCTW/main.png"
      />
      <div className="bar">
        <div className="custom-container">
          <span className="bar_content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </span>
        </div>
      </div>
      <div className="grid custom-container">
        <div className="content">
          <AboutTeam />
          <section className="lastest-events">
            <div className="container-title">
              <h1 className="title-font">
                <LiaHashtagSolid /> Son etkinliklerimiz
              </h1>
              <p>
                <GoDot /> Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="events-container">
              <Event
                title="Game Jam 2024"
                date="26/01/2024"
                emoji="🎮"
                backgroundColor="#a4aeeb"
                status="cancelled"
              />
              <Event
                title="Hackathon 2024"
                date="26/01/2024"
                emoji="💻"
                backgroundColor="#26aeff"
                status="waiting"
              />
              <Event
                title="Game Jam 2023"
                date="26/01/2023"
                emoji="🙀"
                backgroundColor="#fcd53f"
                status="completed"
              />
            </div>
          </section>
          <section className="trend-lesson">
            <div className="lesson-container">
              <Lesson
                image="https://img.freepik.com/free-photo/young-student-learning-library_23-2149215397.jpg?t=st=1720029625~exp=1720033225~hmac=f24527f32f3b5c65303c451dd1bc80c861264a813f9a1cb8edbe6da29c54448a&w=1380"
                title="Full-stack Web Dersleri"
                content=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem totam asperiores, quod quisquam ut molestiae ea iste
            voluptatem corporis, aperiam explicabo sint impedit quas nam quo
            nisi maxime natus ullam ratione. Amet culpa voluptatem ab? Repellat,
            velit iste, expedita tenetur quisquam maxime numquam eaque laborum,
            commodi sed libero placeat quod alias explicabo."
                topics={["Konu 1", "Konu 2", "Konu 3"]}
                totalHour={60}
                lessonCount={10}
                active
              />
            </div>
          </section>
        </div>
        <div className="mainpage-sidebar">
          <section className="lastest-blog">
            <div className="container-title">
              <h1 className="title-font">Son paylaşılan yazı</h1>
            </div>
            <div className="blogs-container">
              <BlogListItem
                image="https://i.pinimg.com/564x/33/2a/41/332a411f1f8e157a95d1ea679a2077a8.jpg"
                categories={["Category 1", "Category 2"]}
                date="01/01/2024"
                title="Lorem ipsum dolor sit amet consectetur."
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi in
          libero dolore, pariatur, nostrum suscipit cum mollitia recusandae
          laudantium minus, amet nisi. Corrupti non maiores odit ipsa placeat,
          perferendis excepturi, vitae officia obcaecati modi eveniet, totam
          error repellendus nam iste. Velit quaerat recusandae nam quos quia
          voluptas vitae officiis doloribus."
              />
            </div>
          </section>
          <section className="lastest-users">
            <div className="container-title">
              <h1 className="title-font">Son Üyeler</h1>
            </div>
            <div className="users-container">
              <UserItem />
              <UserItem />
              <UserItem />
              <UserItem />
              <UserItem />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
