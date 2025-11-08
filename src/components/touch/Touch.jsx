import './Touch.css'
import { FaPaperPlane } from "react-icons/fa";

const Touch = () => {
  return (
    <div className="get__touch">
      <div className="container">
        <div className="contact__card">
          <div className="title">
            <h4>Contact me</h4>
            <h3>to discuss</h3>
            <h2>opportunities</h2>
          </div>
          <a href="#" className="get__touch-link inner__info-link">
            Contact me
            <FaPaperPlane/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Touch;
