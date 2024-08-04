import "../../styles/components/ContactUs/ContactForm.scss";

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <form className="contact-form">
      <div className="double-input">
        <div className="input-container">
          <label htmlFor="name">İsim</label>
          <input id="name" type="text" />
        </div>
        <div className="input-container">
          <label htmlFor="surname">Soyisim</label>
          <input id="surname" type="text" />
        </div>
      </div>
      <div className="input-container">
        <label htmlFor="mail">E-posta adresi</label>
        <input id="mail" type="text" />
      </div>
      <div className="input-container">
        <label htmlFor="message">Mesaj</label>
        <textarea id="message" rows={8}></textarea>
      </div>
      <button>Gönder</button>
    </form>
  );
};

export default ContactForm;
