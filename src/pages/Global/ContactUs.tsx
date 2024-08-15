import Header from "../../components/Header/Header";
import "../../styles/pages/Global/ContactUs/ContactUs.scss";
import { FaPhone, FaYoutube } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import AdminTools from "../../components/AdminTools";
import ContactForm from "../../components/ContactUs/ContactForm";
import { TbWorld } from "react-icons/tb";
import { useTranslation } from "react-i18next";

type Props = {};

const ContactUs = (props: Props) => {
  const { t } = useTranslation();

  return (
    <main className="contact-us">
      <Header
        message={t("contact.header.message")}
        title={t("contact.header.title")}
        description={t("contact.header.description")}
        image="/images/Header/iletisim.svg"
      />
      <section className="informations-form custom-container">
        <div className="informations">
          <div className="contact-item">
            <div className="icon">
              <FaPhone />
            </div>
            <div className="information">
              <b>Phone Number</b>
              <p>+90 555 555 55 55</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <IoMail />
            </div>
            <div className="information">
              <b>E-mail</b>
              <p>test@bbt.com</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <AiFillInstagram />
            </div>
            <div className="information">
              <b>Instagram</b>
              <p>@dpubbt</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <FaYoutube />
            </div>
            <div className="information">
              <b>Youtube</b>
              <p>dpubbt</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <TbWorld />
            </div>
            <div className="information">
              <b>Website</b>
              <p>dpubbt.com</p>
            </div>
          </div>
        </div>
        <div>
          <p className="preprod-text">Bu Bölüm Yakında Aktif Olacak!</p>
          <ContactForm />
        </div>
      </section>
      <section className="map custom-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d384.9340144519989!2d29.897981643902384!3d39.481252796368736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1720528156054!5m2!1str!2str"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <p>
          Andız, DPÜ Evliya Çelebi Yerleşkesi, Kütahya Tavşanlı Yolu 10. km,
          43100 Kütahya Merkez/Kütahya
        </p>
      </section>
      <AdminTools pageName="contact" />
    </main>
  );
};

export default ContactUs;
