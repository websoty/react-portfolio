import FocusItem from "./FocusItem";
import Title from "../Title/Title";
import focusInfo from "../data/focusInfo";
import "./Focus.css";
import { motion } from "motion/react";
import { motionVariantY } from "../../utils/animation";



const Focus = () => {
  return (  
    <section className="focus section" id="focus">
      <div className="container flex-center">
          <Title title={'Areas of focus'} subtitle={'Areas of focus'} />
        <div className="focus__inner">
          <motion.h3 className="focus__description"
              initial="hidden"
              whileInView="visible"
              viewport={{once: false, amount: 0.5}}
              custom={0}
              variants={motionVariantY}
          >
            How I Make Impact
            </motion.h3>
          <ul className="focus__list">
            <FocusItem  focusInfo={focusInfo}/>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Focus;
