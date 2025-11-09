import { useState } from "react";
import PortfolioModal from "./PortfolioModal";
import { motion } from "motion/react";
import { motionVariant2 } from "../../utils/animation";

const PortfolioItem = ({ item }) => {
const [modalOpen, setModalOpen] = useState(false)

function openModal() {
  setModalOpen(true)
}

function modalClose () {
  setModalOpen(false)
}

  return (
    <motion.div className="portfolio__img-card"
        initial="hidden"
        whileInView="visible"
        viewport={{once: false, amount: 0.5}}
        custom={0}
        variants={motionVariant2}
    >
      <div className="img__card" onClick={openModal} >
        <div className="overlay"></div>
        <div className="info">
          <h3>{item.title}</h3>
          <span>{item.category}</span>
        </div>
        <img src={item.imgSrc} alt={item.title} />
      </div>
      {openModal && <PortfolioModal item={item} modalOpen={modalOpen} modalClose={modalClose} />}
    </motion.div>
  );
};

export default PortfolioItem;
