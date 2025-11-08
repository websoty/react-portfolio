import { useState } from "react";
import PortfolioModal from "./PortfolioModal";


const PortfolioItem = ({ item }) => {
const [modalOpen, setModalOpen] = useState(false)

function openModal() {
  setModalOpen(true)
}

function modalClose () {
  setModalOpen(false)
}

  return (
    <div className="portfolio__img-card">
      <div className="img__card" onClick={openModal} >
        <div className="overlay"></div>
        <div className="info">
          <h3>{item.title}</h3>
          <span>{item.category}</span>
        </div>
        <img src={item.imgSrc} alt={item.title} />
      </div>
      {openModal && <PortfolioModal item={item} modalOpen={modalOpen} modalClose={modalClose} />}
    </div>
  );
};

export default PortfolioItem;
