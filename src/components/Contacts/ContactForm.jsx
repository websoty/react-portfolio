import emailjs from "@emailjs/browser";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";

const ContactForm = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jxpnzxx",
        "template_3u295xj",
        e.target,
        "FhnEWzoiGASSArNjy"
      )
      .then(() => {
        setStatusMessage("The letter has been sent ✅");
        setStatusType("success");
        e.target.reset();
        setTimeout(() => setStatusMessage(""), 2000);
      })
      .catch(() => {
        setStatusMessage("Error submitting ❌");
        setStatusType("error");
        setTimeout(() => setStatusMessage(""), 2000);
      });
  };

  return (
    <form className="form contact__form" onSubmit={handleSubmit}>
      <div className="first__row">
        <input name="name" placeholder="Name" type="text" required />
      </div>
      <div className="second__row">
        <input name="email" placeholder="Email" type="email" required />
        <input name="subject" placeholder="Subject" type="text" required />
      </div>
      <div className="third__row">
        <textarea name="message" placeholder="Message" required></textarea>
      </div>
      <button className="contant__btn inner__info-link" type="submit">
        Send Message
        <FaPaperPlane />
      </button>

      {statusMessage && (
        <div
          style={{
            marginTop: "15px",
            padding: "10px 15px",
            borderRadius: "8px",
            color: "#fff",
            backgroundColor: statusType === "success" ? "green" : "red",
            fontWeight: "500",
          }}
        >
          {statusMessage}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
