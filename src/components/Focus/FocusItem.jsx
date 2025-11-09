import { ImArrowRight } from "react-icons/im";
import { FocusModal } from "./FocusModal";
import { useState } from "react";
import { motion } from "motion/react";
import { motionVariantYF } from "../../utils/animation";


const FocusItem = ({ focusInfo }) => {
    const [activeIndex, setActiveIndex] = useState(null)

    function openModal(index) { // peredacha tekushego index elementa + => v setActive
      setActiveIndex(index)
    }

    function closeModal() {
      setActiveIndex(null)
    }

    return (
    <>
      {focusInfo.map((item, index) => (
        <motion.li className="focus__container" key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{once: false, amount: 0.5}}
            custom={index}
            variants={motionVariantYF}
        >
          <div className="focus__card">
            <item.icon className="item__icon" />
            <h3>{item.title}</h3>
            <div className="learn__more-btn" onClick={() => openModal(index)} >
              Learn More
              <ImArrowRight className="learn__more-icon" />
            </div>
          </div>
          {/* active index = tekushemu index */}
          <FocusModal item={item} isActive={activeIndex === index} closeModal={closeModal} />   
        </motion.li>
      ))}
    </>
  );
};

export default FocusItem;
