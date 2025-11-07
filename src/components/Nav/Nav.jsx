import { Link } from "react-scroll";
import "./Nav.css";
Link;
const Nav = ({isMenuOpen}) => {
  const items = ["home", "about", "skills", "portfolio", "contacts"];
  return (
    // Если меню открыто — добавляем класс .active, чтобы показать навигацию
    <nav className={isMenuOpen ? 'nav active' : 'nav'}> 
      {items.map((item, index) => ( // перебор элементов списка навигации
        <Link 
        to={item} 
        key={index} 
        className="nav__link">
        </Link>
      ))}
      <ul className={isMenuOpen ? 'nav__menu active' : 'nav__menu'}>
        <li className="nav__item">
          <a href="#home" className="nav__link active">home</a>
        </li>
        <li className="nav__item">
          <a href="#about" className="nav__link active">about</a>
        </li>
        <li className="nav__item">
          <a href="#skills" className="nav__link active">skills</a>
        </li>
        <li className="nav__item">
          <a href="#portfolio" className="nav__link active">portfolio</a>
        </li>
        <li className="nav__item">
          <a href="#contacts" className="nav__link active">contacts</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
