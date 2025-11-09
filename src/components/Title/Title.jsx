import { motion } from "motion/react";
import { motionVariantTitle, motionVariantSubTitle } from "../../utils/animation";
import "./Title.css";

const Title = ({title, subtitle}) => {
  return (
    <>
      <motion.h2 className="inner__title"
          initial="hidden"
          whileInView="visible"
          viewport={{once: false, amount: 0.5}}
          custom={0}
          variants={motionVariantTitle}
      >{title}
      </motion.h2>

      <motion.h3 className="inner__second-title"
          initial="hidden"
          whileInView="visible"
          viewport={{once: false, amount: 0.5}}
          custom={0}
          variants={motionVariantSubTitle}
    
      >
        {subtitle}
      </motion.h3>
    </>
  );
};

export default Title;
