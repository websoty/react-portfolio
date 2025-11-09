import { contactData } from "../data/contactData";
import { motion } from "motion/react";
import { motionVariantYF, motionVariantY} from "../../utils/animation";

const ContactLeft = () => {
  return (
    <div className="contact__left">
      <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{once: false, amount: 0.5}}
          custom={0}
          variants={motionVariantY}
      >
        Let's discuss your project
        </motion.h2>
      <ul className="contact__list">
        {contactData.map((item,index) => (
        <motion.li key={item.id}
            initial="hidden"
            whileInView="visible"
            viewport={{once: false, amount: 0.5}}
            custom={index}
            variants={motionVariantYF}>
          <h3>
            <item.icon/> {item.title}
          </h3>
          <span>
            <a href={item.link}>{item.value}</a>
          </span>
        </motion.li>
        ))}

      </ul>
    </div>
  );
};

export default ContactLeft;
