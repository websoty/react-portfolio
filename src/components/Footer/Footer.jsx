import { infoLinks, followLinks } from "../data/footerData";
import "./Footer.css";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <footer className="footer">
        <div className="container footer__inner">
          <div className="about__group">
            <h2>SB</h2>
            <p>Frontend Developer</p>
            <a href="#about">About me</a>
          </div>
          <FooterLinks title="More" links={infoLinks} social={false} />

          <FooterLinks title="Follow" links={followLinks} social={true} />
        </div>
        <p className="footer__copyright">
          © <span className="year">{currentYear}</span> by Coding. All rights
          reserved.
        </p>
      </footer>
    </footer>
  );
};

export default Footer;
