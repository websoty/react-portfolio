import './Touch.css'
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "motion/react";
import { motionVariant, motionVariant3 } from "../../utils/animation";

const Touch = () => {
  return (
    <div className="get__touch">
      <div className="container">
        <div className="contact__card">
          <motion.div className="title"
              initial="hidden"
              whileInView="visible"
              viewport={{once: false, amount: 0.5}}
              custom={0}
              variants={motionVariant}
          >
            <h4>Contact me</h4>
            <h3>to discuss</h3>
            <h2>opportunities</h2>
          </motion.div>
          <motion.a href="#" className="get__touch-link inner__info-link"
              initial="hidden"
              whileInView="visible"
              viewport={{once: false, amount: 0.5}}
              custom={1}
              variants={motionVariant3}>
            Contact me
            <FaPaperPlane/>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Touch;
