import { Link } from "react-scroll";
import "./Nav.css";

const Nav = ({ isMenuOpen, handleMenuClick }) => {
  const items = ["home", "about", "skills", "portfolio", "contact"];

  return (
    <nav className={isMenuOpen ? "nav active" : "nav"}>
      <ul className={isMenuOpen ? "nav__menu active" : "nav__menu"}>
        {items.map((item) => (
          <li key={item} className="nav__item">
            <Link
              to={item}
              smooth={true}      
              duration={100}    
              className="nav__link"
              onClick={handleMenuClick}
            >
              {item}  {/* текст ссылки */}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
