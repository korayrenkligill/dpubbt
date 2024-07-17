import "../../styles/components/ContactUs/ContactForm.scss";

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <form className="contact-form">
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
  );
};

export default ContactForm;
