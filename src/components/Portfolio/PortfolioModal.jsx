import { FaXmark } from "react-icons/fa6";

const PortfolioModal = ({ item, modalOpen, modalClose }) => {
  return (
    <div className={`portfolio__model ${modalOpen ? "active" : ""}`}>
      <div className="portfolio__model-body">
        <FaXmark className="portfolio__close-btn" onClick={modalClose} />
        <h3>{item.title}</h3>
        <img src={item.imgSrc} alt={item.title} />
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default PortfolioModal;
