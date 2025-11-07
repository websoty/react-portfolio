import "./Home.css";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaCircleArrowRight, FaArrowDownLong } from "react-icons/fa6";
const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container home__inner">
        <div className="media__icons">
          <a href="">
            <FaLinkedin />
          </a>
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FaGithub />
          </a>
        </div>
        <div className="home__info">
          <h1>Hi, i'm Stanislav!</h1>
          <h3>Front-end Developer</h3>
          <p>
            I create stunning websites for you, experienced in web design and
            development
          </p>
          <a href="" className="home__info-link inner__info-link">
            Contact me
            <FaCircleArrowRight />
          </a>
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
