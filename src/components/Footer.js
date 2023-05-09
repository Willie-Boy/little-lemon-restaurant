import Logo from "../assets/large-logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <img src={Logo} alt="Logo" className="footer-logo" />
      </div>
      <nav aria-labelledby="navigation-title" className="footer-column">
        <h3 id="navigation-title" className="footer-title">
          Navigation
        </h3>
        <ul className="footer-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservations">Reservations</a>
          </li>
          <li>
            <a href="/order-online">Order Online</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
      <div className="footer-column">
        <h3 className="footer-title">Contact</h3>
        <address className="footer-links">
          <p>Address</p>
          <p>Phone number</p>
          <p>Email</p>
        </address>
      </div>
      <div className="footer-column">
        <h3 className="footer-title">Social Media</h3>
        <ul className="footer-links">
          <li>
            <a href="http://facebook.com">Facebook</a>
          </li>
          <li>
            <a href="http://twitter.com">Twitter</a>
          </li>
          <li>
            <a href="http://instagram.com">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
