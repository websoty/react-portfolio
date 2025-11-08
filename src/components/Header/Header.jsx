import "./Header.css";
import Nav from "../Nav/Nav";
import { TbMenuOrder } from "react-icons/tb";
import { MdMenuOpen } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a href="#home" className="logo">
            Portfolio
          </a>
            <Nav isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} />
          <div className="nav__menu-btn" onClick={toggleMenu}>
            {/* смена иконки */}
            {isMenuOpen ? <TbMenuOrder /> : <MdMenuOpen />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
