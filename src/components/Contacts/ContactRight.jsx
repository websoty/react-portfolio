import ContactForm from "./ContactForm";
import { motion } from "motion/react";
import { motionVariantYF,} from "../../utils/animation";


const ContactRight = () => {
  return (
    <div className="contact__right">
      <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{once: false, amount: 0.5}}
          custom={0}
          variants={motionVariantYF}>
        I'm always open to discussing product{" "}
        <span>design work or partnerships.</span>
      </motion.p>
      <ContactForm/>
    </div>
  );
};

export default ContactRight;
