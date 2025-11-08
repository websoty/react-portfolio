import { FaCheckSquare } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export const FocusModal = ({item, isActive, closeModal}) => {
  // console.log(isActive)
  return (
    <>
      <div className={`focus__modal ${isActive ? 'active': null}`}>
        <div className="focus__modal-body">
          <FaXmark className="modal__close-btn" onClick={closeModal} />
          <h3>{item.title}</h3>
          <h4>{item.subtitle}</h4>
          <p>
            {item.description}
          </p>
          <h4>{item.text}</h4>
          <ul>
            {item.list.map((item, index) => {
              return (
                <li key={index}>
                  <FaCheckSquare/>
                  {item}
                </li> 
              )
            })}

          </ul>
        </div>
      </div>
    </>
  );
};
