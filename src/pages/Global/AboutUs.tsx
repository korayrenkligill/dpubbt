import { FaUsers } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { IoCubeSharp } from "react-icons/io5";

import Header from "../../components/Header/Header";
import AboutTeam from "../../components/AboutTeam/AboutTeam";
import AdminTools from "../../components/AdminTools";

import "../../styles/pages/Global/AboutUs/AboutUs.scss";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import HeaderLoader from "../../components/Header/HeaderLoader";
import { Skeleton } from "@mui/material";
import AboutTeamLoader from "../../components/AboutTeam/AboutTeamLoader";
type Props = {};

const AboutUs = (props: Props) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <main className="aboutUs">
      {loading ? (
        <HeaderLoader />
      ) : (
        <Header
          message={t("aboutus.header.message")}
          title={t("aboutus.header.title")}
          description={t("aboutus.header.description")}
          image="/images/Header/hakkimizda.svg"
        />
      )}
      <section className="mission-and-vision custom-container">
        {loading ? (
          <>
            <div>
              <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <br />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            </div>
            <div>
              <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <br />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            </div>
          </>
        ) : (
          <>
            <div>
              <h1>Misyonumuz</h1>
              <p>
                Dumlupınar Üniversitesi Bilgisayar Bilişim Topluluğu (BBT)
                olarak misyonumuz, üyelerimizin ve katılımcılarımızın teknoloji
                ve inovasyon alanında bilgi ve yeteneklerini en üst seviyeye
                çıkarmalarını sağlamak, onları sektördeki en son trendlerle
                donatmak ve kolektif bir öğrenme ortamı oluşturmaktır. BBT
                olarak, yazılım, tasarım ve diğer teknik becerileri
                geliştirmenin yanı sıra, üyelerimizin kişisel ve profesyonel
                gelişimlerine de katkıda bulunuyoruz. İnovatif etkinlikler,
                eğitimler ve projelerle, üyelerimizin kariyer yolculuklarını
                destekliyor ve onlara her adımda rehberlik ediyoruz.
              </p>
            </div>
            <div>
              <h1>Vizyonumuz</h1>
              <p>
                BBT olarak vizyonumuz, teknoloji ve bilişim alanında öncü bir
                topluluk olmak, Dumlupınar Üniversitesi öğrencilerinin dünya
                çapında rekabet edebilecek bilgi ve becerilere sahip olmalarını
                sağlamak ve yenilikçi çözümler üreten bir ekosistem
                oluşturmaktır. Gelecekte, BBT'yi sadece üniversite çapında
                değil, ulusal ve uluslararası düzeyde tanınan bir topluluk
                haline getirerek, üyelerimizin bilgi ve deneyimlerini
                paylaşabilecekleri, işbirliği yapabilecekleri ve birlikte
                gelişebilecekleri bir platform sunmayı hedefliyoruz.
              </p>
            </div>
          </>
        )}
      </section>
      {loading ? <AboutTeamLoader /> : <AboutTeam />}

      {loading ? (
        <Skeleton variant="rounded" sx={{ height: "100px", width: "100%" }} />
      ) : (
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
              <b className="count">22</b>
              <span>Kişilik ekip</span>
            </div>
          </div>
          <div className="statistic">
            <IoCubeSharp className="icon" />
            <div>
              <b className="count">7</b>
              <span>Etkinlik</span>
            </div>
          </div>
        </section>
      )}

      <AdminTools pageName="about-us" />
    </main>
  );
};

export default AboutUs;
