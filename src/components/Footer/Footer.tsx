import { Link } from "react-router-dom";
import "../../styles/components/Footer/Footer.scss";
import NavigationItems from "../../json/navigations.json";
import { AiFillInstagram } from "react-icons/ai";
import {
  FaXTwitter,
  FaYoutube,
  FaDiscord,
  FaLinkedinIn,
  FaAngleRight,
} from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { MdAlternateEmail } from "react-icons/md";
import SponsorCarousel from "../SponsorCarousel";
type Props = {};

const sponsors = [
  "https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/guzel-hosting-logo-alt.webp",
  "https://ugc.production.linktr.ee/6c4d55e9-fbc3-4ef2-aaed-88f207104674_Ads-z-tasar-m--1-.png",
];

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="custom-container container">
        <div className="column column-1">
          <h2>Sosyal medyalarımız</h2>
          <div className="social-medias">
            <a href="https://www.instagram.com/dpubbt" target="_blank">
              <AiFillInstagram />
              <span>Instagram</span>
            </a>
            <a href="https://twitter.com/dpubbt43" target="_blank">
              <FaXTwitter />
              <span>X</span>
            </a>
            <a href="https://www.youtube.com/@dpubbt" target="_blank">
              <FaYoutube />
              <span>Youtube</span>
            </a>
            <a href="https://discord.gg/bTYpa6VcJE" target="_blank">
              <FaDiscord />
              <span>Discord</span>
            </a>
            <a href="https://linkedin.com/company/dpubbt" target="_blank">
              <FaLinkedinIn />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://chat.whatsapp.com/HCD5qjz01XyIbcNRMY8cFP"
              target="_blank"
            >
              <IoLogoWhatsapp />
              <span>Whatsapp</span>
            </a>
          </div>
        </div>
        <div className="column column-2">
          <h2>Bağlantılar</h2>
          <div className="navigations">
            {NavigationItems.map((item, key) => (
              <Link to={item.link} key={key}>
                <FaAngleRight className="icon" />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="column column-3">
          <h2>Bize Ulaşın</h2>
          <p className="address">
            Andız, DPÜ Evliya Çelebi Yerleşkesi, Kütahya Tavşanlı Yolu 10. km,
            43100 Kütahya Merkez/Kütahya
          </p>
          <div className="links">
            <a href="https://dpubbt.com" className="link">
              <div className="icon">
                <TbWorld />
              </div>
              <div className="texts">
                <h3>Website</h3>
                <p>dpubbt.com</p>
              </div>
            </a>
            <a href="mailto:dpubilgisayarvebilisim@gmail.com" className="link">
              <div className="icon">
                <MdAlternateEmail />
              </div>
              <div className="texts">
                <h3>E-mail</h3>
                <p>dpubilgisayarvebilisim@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <SponsorCarousel sponsors={sponsors} />
      <div className="bottom-container">
        <p>
          © 2024 Kütahya Dumlupınar Üniversitesi Bilgisayar ve Bilişim
          Topluluğu. Tüm Hakları Saklıdır. Designed by Bilgisayar ve Bilişim
          Topluluğu
        </p>
        <b>
          <i>Hosting Sponsored by GüzelHosting</i>
        </b>
      </div>
    </footer>
  );
};

export default Footer;
