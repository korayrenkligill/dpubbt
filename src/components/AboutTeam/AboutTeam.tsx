import React, { useState } from "react";
import "../../styles/components/AboutTeam/AboutTeam.scss";
import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
type Props = {};

const AboutTeam = (props: Props) => {
  const texts = [
    {
      title: "Bilgisayar ve Bilişim Topluluğu Nedir?",
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel amet
          minima neque distinctio quisquam? Excepturi temporibus perferendis
          ullam, illum, obcaecati id repellat asperiores sint qui nihil ipsam
          doloremque ipsa odit provident ab harum consectetur necessitatibus
          iure molestias voluptate, repudiandae commodi!`,
    },
    {
      title: "Akademi Takımı",
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel amet
          minima neque distinctio quisquam? Excepturi temporibus perferendis
          ullam, illum, obcaecati id repellat asperiores sint qui nihil ipsam
          doloremque ipsa odit provident ab harum consectetur necessitatibus
          iure molestias voluptate, repudiandae commodi!`,
    },
    {
      title: "Pazarlama Takımı",
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel amet
          minima neque distinctio quisquam? Excepturi temporibus perferendis
          ullam, illum, obcaecati id repellat asperiores sint qui nihil ipsam
          doloremque ipsa odit provident ab harum consectetur necessitatibus
          iure molestias voluptate, repudiandae commodi!`,
    },
    {
      title: "Sosyal Medya Takımı",
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel amet
          minima neque distinctio quisquam? Excepturi temporibus perferendis
          ullam, illum, obcaecati id repellat asperiores sint qui nihil ipsam
          doloremque ipsa odit provident ab harum consectetur necessitatibus
          iure molestias voluptate, repudiandae commodi!`,
    },
    {
      title: "Sponsorluk Takımı",
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel amet
          minima neque distinctio quisquam? Excepturi temporibus perferendis
          ullam, illum, obcaecati id repellat asperiores sint qui nihil ipsam
          doloremque ipsa odit provident ab harum consectetur necessitatibus
          iure molestias voluptate, repudiandae commodi!`,
    },
  ];

  const [selectedTeam, setSelectedTeam] = useState<number>(0);
  return (
    <section className="about-us-comp">
      <div className="about-us-comp-container custom-container">
        <div className="teams">
          <div
            className={`team team1 ${selectedTeam === 1 && "active"}`}
            onClick={() => setSelectedTeam(1)}
          >
            <div className="team-content">
              <img src="/images/icons/graduate.png" alt="" />
            </div>
          </div>
          <div
            className={`team team2 ${selectedTeam === 2 && "active"}`}
            onClick={() => setSelectedTeam(2)}
          >
            <div className="team-content">
              <img src="/images/icons/megaphone.png" alt="" />
            </div>
          </div>
          <div
            className={`team team3 ${selectedTeam === 3 && "active"}`}
            onClick={() => setSelectedTeam(3)}
          >
            <div className="team-content">
              <img src="/images/icons/network.png" alt="" />
            </div>
          </div>
          <div
            className={`team team4 ${selectedTeam === 4 && "active"}`}
            onClick={() => setSelectedTeam(4)}
          >
            <div className="team-content">
              <img src="/images/icons/team-leader.png" alt="" />
            </div>
          </div>
          <div
            className={`team team5 ${selectedTeam === 0 && "active"}`}
            onClick={() => setSelectedTeam(0)}
          >
            <div className="team-content">
              <img src="/images/logo-bbt.png" alt="" />
            </div>
          </div>
        </div>
        <div className="texts">
          <h2 className="main-title">HAKKIMIZDA</h2>
          <h1 className="title">{texts[selectedTeam].title}</h1>
          <p className="description">{texts[selectedTeam].description}</p>
          <Link to="#" className="more">
            <GoChevronRight className="icon" /> Devamını Oku
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
