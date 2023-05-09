import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Logo from "../assets/logo.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <button className="hamburger" onClick={toggleMenu}>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>
      <Link to="/">
        <img src={Logo} alt="Logo" className="header-logo" />
      </Link>
      <Nav menuOpen={menuOpen} closeMenu={closeMenu} />
    </header>
  );
}
