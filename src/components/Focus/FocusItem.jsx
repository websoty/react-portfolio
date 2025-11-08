import { ImArrowRight } from "react-icons/im";
import { FocusModal } from "./FocusModal";
import { useState } from "react";


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
        <li className="focus__container" key={index}>
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
        </li>
      ))}
    </>
  );
};

export default FocusItem;
