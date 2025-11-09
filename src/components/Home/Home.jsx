import { motion } from "motion/react";
import "./Home.css";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaCircleArrowRight, FaArrowDownLong } from "react-icons/fa6";
import { iconVariant, motionVariant } from "../../utils/animation";


const icons = [
  {id: 1, href: 'https://www.linkedin.com/in/stanislav-borodii/', icon: <FaLinkedin/>},
  {id: 2, href: 'https://www.instagram.com/naturesprout/', icon: <FaInstagram/>},
  {id: 3, href: 'https://github.com/websoty', icon: <FaGithub/>},
]

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container home__inner">
        <div className="media__icons">
          {icons.map((item, index) => (
          <motion.a 
            href={item.href} 
            key={item.id}
            custom={index} // peredacha dynam znacheniya v variants
            variants={iconVariant}    // object , opisivaet state
            initial="hidden" // state pered nachalom animation
            whileInView="visible" // kakoy budet animate v oblasti vidimosti
            viewport={{once: false, amount: 0.5}} // 1 key = animate kajdi raz v oblasti vidiomosti work, 2key=  % oblasti vidimost
          
          >
            {item.icon}
          </motion.a>
          ))}
        </div>
        <div className="home__info">
          <motion.h1 
              initial="hidden"
              whileInView="visible"
              viewport={{once: false, amount: 0.5}}
              custom={0}
              variants={motionVariant}
          >Hi, i'm Stanislav!</motion.h1>
          <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{once: false, amount: 0.5}}
              custom={1}
              variants={motionVariant}
          >Front-end Developer</motion.h3>
          <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{once: false, amount: 0.5}}
              custom={2}
              variants={motionVariant}
          >
            Turning ideas into smooth, high-performing products. Smart code. Bold design. Real impact.
          </motion.p>
          <motion.a 
              initial="hidden"
              whileInView="visible"
              viewport={{once: false, amount: 0.5}}
              custom={3}
              variants={motionVariant}
              href="#contact" 
              className="home__info-link inner__info-link">
            Contact me
            <FaCircleArrowRight />
          </motion.a>
        </div>
      </div>
      <a href="#about" className="scroll__down">
        Scroll down
        <FaArrowDownLong/>
      </a>
    </section>
  );
};

export default Home;
