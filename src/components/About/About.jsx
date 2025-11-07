import { aboutImg } from "../../assets/images";
import Title from "../Title/Title";
import "./About.css";
import { FaDownload } from "react-icons/fa";



const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container flex__center">
        <Title title='About me' subtitle='About me' />
        {/* <h2 className="inner__title">About me</h2>
        <h3 className="inner__second-title">About me</h3> */}
        <div className="about__inner">
          <div className="about__img">
            <img src={aboutImg} alt="about" />
          </div>
          <div className="about__info">
            <div className="description">
              <h3>
                <span>Front-End Developer</span>
              </h3>
              <p>
                I approach development with attention to detail, clean architecture, and scalability in mind — from UI implementation to state management and performance optimization. I value thoughtful design, accessibility, and seamless user experience as core elements of great products.
              </p>
            </div>
            <ul className="professional__list">
              <li className="list__item">
                <span className="number">1</span>
                <span className="text">Year of experience</span>
              </li>
              <li className="list__item">
                <span className="number">5+</span>
                <span className="text">Projects</span>
              </li>
              <li className="list__item">
                <span className="number">∞</span>
                <span className="text">Passion for code</span>
              </li>
            </ul>
            <a href="" className="inner__info-link">
              Download
              <FaDownload/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
