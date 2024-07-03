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
      <section className="custom-container">
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
    </main>
  );
};

export default ContactUs;
