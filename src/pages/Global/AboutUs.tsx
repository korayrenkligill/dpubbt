import { FaUsers } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { IoCubeSharp } from "react-icons/io5";

import Header from "../../components/Header/Header";
import AboutTeam from "../../components/AboutTeam/AboutTeam";
import AdminTools from "../../components/AdminTools";

import "../../styles/pages/Global/AboutUs/AboutUs.scss";
type Props = {};

const AboutUs = (props: Props) => {
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

      <AdminTools pageName="about-us" />
    </main>
  );
};

export default AboutUs;
