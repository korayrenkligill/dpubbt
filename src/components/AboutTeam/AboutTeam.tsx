import { useState } from "react";
import "../../styles/components/AboutTeam/AboutTeam.scss";
import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import { TbClick } from "react-icons/tb";

type Props = { moreButton?: boolean };

const AboutTeam = ({ moreButton = false }: Props) => {
  const texts = [
    {
      title: "Bilgisayar ve Bilişim Topluluğu Nedir?",
      description: `Dumlupınar Üniversitesi Bilgisayar Bilişim Topluluğu (BBT), teknoloji ve inovasyon alanında tutkulu bireylerden oluşan bir aile olarak bilgi ve deneyimlerini paylaşarak gelişimi desteklemektedir. Amacımız, üyelerimizi ve topluluğumuzu sektördeki en son trendlerle buluşturmak, yaratıcı projeler ve etkinliklerle bilgi birikimimizi artırmak ve hep birlikte büyümektir. Topluluğumuz, hem kişisel hem de profesyonel gelişim fırsatları sunarak, her adımda yanınızda olmaktadır`,
    },
    {
      title: "Akademi Takımı",
      description: `Akademi Takımı, yazılım ve teknoloji alanında derin bilgiye sahip uzmanlardan oluşan, eğitim ve öğrenme süreçlerini yönlendiren bir gruptur. Bu ekip, katılımcılara en güncel teknolojik gelişmeleri öğretmek, uygulamalı dersler ve interaktif öğrenme deneyimleri sunmak için çalışır. Yazılım ve teknik beceriler üzerine odaklanan bu takım, üyelerimizin yetkinliklerini artırmak ve kariyerlerine yön vermek için titizlikle görev alır.`,
    },
    {
      title: "Pazarlama Takımı",
      description: `Pazarlama Takımı, topluluğumuzun etkinliklerini ve projelerini tanıtmak için stratejik planlar geliştiren ve uygulayan bir ekipten oluşur. Bu takım, etkili pazarlama kampanyaları ile topluluğumuzun görünürlüğünü artırır, hedef kitlemize ulaşır ve topluluk ile ilgili bilgi ve fırsatları geniş bir kitleye ulaştırır. Yaratıcı ve yenilikçi yaklaşımlarla, etkinliklerimizi ve projelerimizi başarılı bir şekilde tanıtmaktadır.`,
    },
    {
      title: "Sosyal Medya Takımı",
      description: `Sosyal Medya Takımı, topluluğumuzun dijital varlığını yönetmek ve etkileşim yaratmak için sorumlu olan yaratıcı bir ekipten oluşur. Tasarım ve içerik oluşturma konularında yetkin olan bu takım, sosyal medya platformlarında etkileyici paylaşımlar yaparak topluluğumuzun sesini duyurur. Görsel tasarımlar, paylaşımlar ve kampanyalar ile topluluk etkileşimini artırmak için sürekli olarak yenilikçi içerikler üretir.`,
    },
    {
      title: "Sponsorluk Takımı",
      description: `Sponsorluk Takımı, etkinliklerimiz için gerekli olan finansal destek ve malzemeleri sağlamak için aktif olarak çalışan bir ekip olarak görev yapar. Sponsor arayışı, gerekli alet ve edevat temini, yiyecek ve içecek ihtiyaçlarını karşılama gibi görevleri üstlenen bu takım, etkinliklerimizin başarılı bir şekilde gerçekleşmesini sağlamak için geniş bir iletişim ağı kullanır. İletişim becerileri ve stratejik yaklaşımları ile, etkinliklerimiz için gerekli kaynakları temin eder ve sponsorluk ilişkilerini güçlendirir.`,
    },
  ];

  const [selectedTeam, setSelectedTeam] = useState<number>(0);
  return (
    <section className="about-us-comp">
      <div
        className={`about-us-comp-container ${
          !moreButton && "custom-container"
        }`}
      >
        <div className="teams">
          <div
            className={`team team1 ${selectedTeam === 1 && "active"}`}
            onClick={() => setSelectedTeam(1)}
          >
            <div className="team-content">
              <img src="/images/icons/graduate.png" alt="" />
              <TbClick className="icon" />
            </div>
          </div>
          <div
            className={`team team2 ${selectedTeam === 2 && "active"}`}
            onClick={() => setSelectedTeam(2)}
          >
            <div className="team-content">
              <img src="/images/icons/megaphone.png" alt="" />
              <TbClick className="icon" />
            </div>
          </div>
          <div
            className={`team team3 ${selectedTeam === 3 && "active"}`}
            onClick={() => setSelectedTeam(3)}
          >
            <div className="team-content">
              <img src="/images/icons/network.png" alt="" />
              <TbClick className="icon" />
            </div>
          </div>
          <div
            className={`team team4 ${selectedTeam === 4 && "active"}`}
            onClick={() => setSelectedTeam(4)}
          >
            <div className="team-content">
              <img src="/images/icons/team-leader.png" alt="" />
              <TbClick className="icon" />
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
          {moreButton && (
            <Link to="/about-us" className="more">
              <GoChevronRight className="icon" /> Devamını Oku
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
