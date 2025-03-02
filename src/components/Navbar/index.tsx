import './style.css';
import { Link } from "react-router-dom";
import Button from "../Button";
import ButtonAction from "../ButtonAction";
import styles from "./style.module.css";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";

type Props = {};

function index({}: Props) {
  const logged = sessionStorage.getItem("username");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userName = sessionStorage.getItem("username");

  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      if (
        isMenuOpen &&
        !(e.target as HTMLElement).closest(".main-nav") &&
        !(e.target as HTMLElement).closest(".menu-toggle")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      searchTerm: searchQuery,
    };
    window.location.href = `/search/${payload.searchTerm}`;
  };

  // Función para cerrar sesión (gestión de sesión corregida)
  const handleClose = () => {
    sessionStorage.clear();
    window.location.href = "/home";
  };

  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary ${styles.navColorRewear}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="ReWear Logo" className="logo-image" />
          </Link>

          <form onSubmit={handleSubmit} className="search-bar">
            <input
              type="text"
              placeholder="¿Qué estás buscando?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button className="search-button">
              <IoIosSearch />
            </button>
          </form>
          
          <button className="menu-toggle" aria-label="Abrir menú" onClick={toggleMenu}>
            ☰
          </button>

          <nav className={`main-nav ${isMenuOpen ? "active" : ""}`}>
            {logged ? (
              <>
                <Link to="/history" className="nav-item">
                  🛍️ Mis Compras
                </Link>
                <Link to="/cart" className="nav-item">
                  🛒 Carrito
                </Link>
                <Link to={`/user/${userName}`} className="nav-item">
                  👤 Mi Perfil
                </Link>
                <ButtonAction text="Cerrar Sesión" onClick={handleClose} />
              </>
            ) : (
              <>
                <Link to="/login" className="button button-secondary">
                  Iniciar Sesión
                </Link>
                <Link to="/login" className="button button-primary">
                  Crear cuenta
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </nav>
  );
}

export default index;
