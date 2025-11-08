import FocusItem from "./FocusItem";
import Title from "../Title/Title";
import focusInfo from "../data/focusinfo";
import "./Focus.css";


const Focus = () => {
  return (  
    <section className="focus section" id="focus">
      <div className="container flex-center">
          <Title title={'Areas of focus'} subtitle={'Areas of focus'} />
        <div className="focus__inner">
          <h3 className="focus__description">How I Make Impact</h3>
          <ul className="focus__list">
            <FocusItem  focusInfo={focusInfo}/>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Focus;
