import { motion } from "motion/react";
import { aboutImg } from "../../assets/images";
import Title from "../Title/Title";
import "./About.css";
import { FaDownload } from "react-icons/fa";
import { motionVariant2, motionVariant3, motionVariantTitle } from "../../utils/animation";


const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container flex__center">
        <Title title='About me' subtitle='About me' />
        {/* <h2 className="inner__title">About me</h2>
        <h3 className="inner__second-title">About me</h3> */}
        <div className="about__inner">
          <motion.div className="about__img"
              initial="hidden"
              whileInView="visible"
              viewport={{once: false, amount: 0.5}}
              custom={0}
              variants={motionVariant2}
          >
            <img src={aboutImg} alt="about" />
          </motion.div>
          <div className="about__info">
            <motion.div className="description"
              initial="hidden"
              whileInView="visible"
              viewport={{once: false, amount: 0.5}}
              custom={0}
              variants={motionVariant3}
            >
              <h3>
                <span>Front-End Developer</span>
              </h3>
              <p>
                I approach development with attention to detail, clean architecture, and scalability in mind — from UI implementation to state management and performance optimization. I value thoughtful design, accessibility, and seamless user experience as core elements of great products.
              </p>
            </motion.div>
            <motion.ul className="professional__list"
              initial="hidden"
              whileInView="visible"
              viewport={{once: false, amount: 0.5}}
              custom={0}
              variants={motionVariant3}
            >
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
            </motion.ul>
            <motion.a 
              href="" 
              className="inner__info-link"
              initial="hidden"
              whileInView="visible"
              viewport={{once: false, amount: 0.5}}
              custom={1}
              variants={motionVariant3}>
              Download
              <FaDownload/>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
