import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <a href="/" className="logo">
          <img src="logo.png" alt="logo ReWear" style={{ height: "4rem" }} />
        </a>
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#quienes-somos">¿Quiénes Somos?</a>
            </li>
            <li>
              <a href="#que-queremos">¿Qué Queremos?</a>
            </li>
            <li>
              <a href="#mision">Misión</a>
            </li>
            <li>
              <a href="#vision">Visión</a>
            </li>
          </ul>
        </nav>
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
