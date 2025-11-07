import "./Title.css";

const Title = ({title, subtitle}) => {
  return (
    <>
      <h2 className="inner__title">{title}</h2>
      <h3 className="inner__second-title">{subtitle}</h3>
    </>
  );
};

export default Title;
