import { FaPaperPlane } from "react-icons/fa6";
import { motion } from "motion/react";
import { motionVariantY, motionVariant3} from "../../utils/animation";


const ContactForm = () => {
  return (
    <form className="form contact__form">
      <motion.div className="first__row"
          initial="hidden"
          whileInView="visible"
          viewport={{once: false, amount: 0.5}}
          custom={0}
          variants={motionVariantY}
      >
        <input placeholder="Name" type="text" />
      </motion.div>
      <motion.div className="second__row"
          initial="hidden"
          whileInView="visible"
          viewport={{once: false, amount: 0.5}}
          custom={0}
          variants={motionVariantY}
      >
        <input placeholder="Email" type="email" />
        <input placeholder="Subject" type="text" />
      </motion.div>
      <motion.div className="third__row"
          initial="hidden"
          whileInView="visible"
          viewport={{once: false, amount: 0.5}}
          custom={0}
          variants={motionVariantY}
      >
        <textarea placeholder="Message"></textarea>
      </motion.div>
      <motion.button className="contant__btn inner__info-link" type="submit"
          initial="hidden"
          whileInView="visible"
          viewport={{once: false, amount: 0.5}}
          custom={0}
          variants={motionVariant3}
      >
        Send Message
        <FaPaperPlane/>
      </motion.button>
    </form>
  );
};

export default ContactForm;
