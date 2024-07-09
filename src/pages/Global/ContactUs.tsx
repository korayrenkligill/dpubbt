/* eslint-disable jsx-a11y/iframe-has-title */
import Header from "../../components/Header/Header";
import "../../styles/pages/Global/ContactUs/ContactUs.scss";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <main className="contact-us">
      <Header
        message="🫶 Seni dinliyorum"
        title="İletişime Geç"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
        image="https://img.freepik.com/free-vector/organic-flat-man-customer-support_23-2148893295.jpg?t=st=1720020625~exp=1720024225~hmac=246ebc45799ba02921992458ae15bb4af6a3fbbccb147012aca3ce43b1fee23d&w=826"
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
        </div>
        <form className="form">
          <div className="double-input">
            <div className="input-container">
              <label htmlFor="">İsim</label>
              <input type="text" />
            </div>
            <div className="input-container">
              <label htmlFor="">Soyisim</label>
              <input type="text" />
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="">E-posta adresi</label>
            <input type="text" />
          </div>
          <div className="input-container">
            <label htmlFor="">Mesaj</label>
            <textarea name="" id="" rows={8}></textarea>
          </div>
          <button>Gönder</button>
        </form>
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
    </main>
  );
};

export default ContactUs;
