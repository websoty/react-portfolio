import { FaPaperPlane } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <form className="form contact__form">
      <div className="first__row">
        <input placeholder="Name" type="text" />
      </div>
      <div className="second__row">
        <input placeholder="Email" type="email" />
        <input placeholder="Subject" type="text" />
      </div>
      <div className="third__row">
        <textarea placeholder="Message"></textarea>
      </div>
      <button className="contant__btn inner__info-link" type="submit">
        Send Message
        <FaPaperPlane/>
      </button>
    </form>
  );
};

export default ContactForm;
