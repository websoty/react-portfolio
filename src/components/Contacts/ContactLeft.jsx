import { contactData } from "../data/contactData";


const ContactLeft = () => {
  return (
    <div className="contact__left">
      <h2>Let's discuss your project</h2>
      <ul className="contact__list">
        {contactData.map(item => (
        <li key={item.id}>
          <h3>
            <item.icon/> {item.title}
          </h3>
          <span>
            <a href={item.link}>{item.value}</a>
          </span>
        </li>
        ))}

      </ul>
    </div>
  );
};

export default ContactLeft;
