/* eslint-disable jsx-a11y/anchor-is-valid */
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
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="custom-container container">
        <div className="column column-1">
          <h2>Sosyal medyalarımız</h2>
          {/* <div className="top">
            <img
              src="https://www.dpubbt.com/wp-content/uploads/2024/02/logo-bbt-2048x2048.png"
              alt=""
            />
          </div> */}
          <div className="social-medias">
            <a href="#">
              <AiFillInstagram />
              <span>Instagram</span>
            </a>
            <a href="#">
              <FaXTwitter />
              <span>X</span>
            </a>
            <a href="#">
              <FaYoutube />
              <span>Youtube</span>
            </a>
            <a href="#">
              <FaDiscord />
              <span>Discord</span>
            </a>
            <a href="#">
              <FaLinkedinIn />
              <span>LinkedIn</span>
            </a>
            <a href="#">
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
            <div className="link">
              <div className="icon">
                <TbWorld />
              </div>
              <div className="texts">
                <h3>Website</h3>
                <p>dpubbt.com</p>
              </div>
            </div>
            <div className="link">
              <div className="icon">
                <MdAlternateEmail />
              </div>
              <div className="texts">
                <h3>E-mail</h3>
                <p>info@dpubbt.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
