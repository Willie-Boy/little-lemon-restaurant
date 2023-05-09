import { Link } from "react-router-dom";

export default function Nav({ menuOpen, closeMenu }) {
  return (
    <nav className={`nav ${menuOpen ? "nav-open" : ""}`} onClick={closeMenu}>
      <ul className="nav-list" onClick={(e) => e.stopPropagation()}>
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/menu">Menu</Link>
        </li>
        <li className="nav-item">
          <Link to="/reservations">Reservations</Link>
        </li>
        <li className="nav-item">
          <Link to="/order-online">Order Online</Link>
        </li>
        <li className="nav-item">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
