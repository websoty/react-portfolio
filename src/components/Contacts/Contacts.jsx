import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";
import Title from '../Title/Title'
import "./Contacts.css";

const Contacts = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <Title title='Contact Me' subtitle='Contact Me' />
        <div className="contact__inner">
            <ContactLeft/>
            <ContactRight/>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
