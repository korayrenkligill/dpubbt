import Header from "../../components/Header/Header";
import AboutTeam from "../../components/AboutTeam/AboutTeam";
import Slider from "react-slick";

import { FaUsers } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { IoCubeSharp } from "react-icons/io5";

import "../../styles/pages/Global/AboutUs/AboutUs.scss";
import AdminTools from "../../components/AdminTools";
type Props = {};

const AboutUs = (props: Props) => {
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
    slidesToShow: 4,
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
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: <></>,
          prevArrow: <></>,
        },
      },
      {
        breakpoint: 600,
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
    <main className="aboutUs">
      <Header
        message="🥸 Dile benden ne dilersen!"
        title="BBT Hakkında"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
        buttonText="İletişime Geç"
        image="https://img.freepik.com/free-vector/hand-drawn-business-communication-concept_23-2149167947.jpg?t=st=1719887895~exp=1719891495~hmac=713db1698de4a9e5f1f67b79abce0cf07f6193791b2e0d1ea8a9ad61aa2bd98c&w=1380"
      />
      <section className="mission-and-vision custom-container">
        <div>
          <h1>Misyonumuz</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            neque ipsam, cum aut veritatis ullam iste distinctio laborum
            corrupti sequi.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
            vero?
          </p>
        </div>
        <div>
          <h1>Vizyonumuz</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            neque ipsam, cum aut veritatis ullam iste distinctio laborum
            corrupti sequi.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
            vero?
          </p>
        </div>
      </section>
      <AboutTeam />

      <section className="statistics">
        <div className="statistic">
          <FaUsers className="icon" />
          <div>
            <b className="count">614</b>
            <span>Üye</span>
          </div>
        </div>
        <div className="statistic">
          <MdWork className="icon" />
          <div>
            <b className="count">24</b>
            <span>Kişilik ekip</span>
          </div>
        </div>
        <div className="statistic">
          <IoCubeSharp className="icon" />
          <div>
            <b className="count">4</b>
            <span>Etkinlik</span>
          </div>
        </div>
      </section>

      <section
        className="slider-container custom-container team-members"
        style={{}}
      >
        <Slider {...settings}>
          <div>
            <div className="member">
              <img
                src="https://randomuser.me/api/portraits/men/88.jpg"
                alt=""
              />
              <h3>Koray Renkligil</h3>
              <p>Akademi Takımı</p>
            </div>
          </div>
          <div>
            <div className="member">
              <img
                src="https://randomuser.me/api/portraits/men/88.jpg"
                alt=""
              />
              <h3>Koray Renkligil</h3>
              <p>Akademi Takımı</p>
            </div>
          </div>
          <div>
            <div className="member">
              <img
                src="https://randomuser.me/api/portraits/men/88.jpg"
                alt=""
              />
              <h3>Koray Renkligil</h3>
              <p>Akademi Takımı</p>
            </div>
          </div>
          <div>
            <div className="member">
              <img
                src="https://randomuser.me/api/portraits/men/88.jpg"
                alt=""
              />
              <h3>Koray Renkligil</h3>
              <p>Akademi Takımı</p>
            </div>
          </div>
          <div>
            <div className="member">
              <img
                src="https://randomuser.me/api/portraits/men/88.jpg"
                alt=""
              />
              <h3>Koray Renkligil</h3>
              <p>Akademi Takımı</p>
            </div>
          </div>
          <div>
            <div className="member">
              <img
                src="https://randomuser.me/api/portraits/men/88.jpg"
                alt=""
              />
              <h3>Koray Renkligil</h3>
              <p>Akademi Takımı</p>
            </div>
          </div>
          <div>
            <div className="member">
              <img
                src="https://randomuser.me/api/portraits/men/88.jpg"
                alt=""
              />
              <h3>Koray Renkligil</h3>
              <p>Akademi Takımı</p>
            </div>
          </div>
          <div>
            <div className="member">
              <img
                src="https://randomuser.me/api/portraits/men/88.jpg"
                alt=""
              />
              <h3>Koray Renkligil</h3>
              <p>Akademi Takımı</p>
            </div>
          </div>
          <div>
            <div className="member">
              <img
                src="https://randomuser.me/api/portraits/men/88.jpg"
                alt=""
              />
              <h3>Koray Renkligil</h3>
              <p>Akademi Takımı</p>
            </div>
          </div>
          <div>
            <div className="member">
              <img
                src="https://randomuser.me/api/portraits/men/88.jpg"
                alt=""
              />
              <h3>Koray Renkligil</h3>
              <p>Akademi Takımı</p>
            </div>
          </div>
          <div>
            <div className="member">
              <img
                src="https://randomuser.me/api/portraits/men/88.jpg"
                alt=""
              />
              <h3>Koray Renkligil</h3>
              <p>Akademi Takımı</p>
            </div>
          </div>
          <div>
            <div className="member">
              <img
                src="https://randomuser.me/api/portraits/men/88.jpg"
                alt=""
              />
              <h3>Koray Renkligil</h3>
              <p>Akademi Takımı</p>
            </div>
          </div>
          <div>
            <div className="member">
              <img
                src="https://randomuser.me/api/portraits/men/88.jpg"
                alt=""
              />
              <h3>Koray Renkligil</h3>
              <p>Akademi Takımı</p>
            </div>
          </div>
        </Slider>
      </section>
      <AdminTools pageName="about-us" />
    </main>
  );
};

export default AboutUs;
