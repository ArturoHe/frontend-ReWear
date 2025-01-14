import React from "react";
import RegisterButton from "../RegisterButton";
import LoginButton from "../LoginButton";
import styles from "./style.module.css";
import logo from "./logo.png";
import lupa from "./lupa.png";

const Navbar: React.FC = () => {
  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
      <div className="container-fluid">
        <a className="navbar-brand d-none d-sm-block" href="#">
          <img src={logo} alt="ReWear Logo" className={styles.logo} />
        </a>
        <form className="d-flex align-items-center w-50 mx-5" role="search">
          <div className="input-group rounded-pill border bg-white">
            <input
              type="text"
              className="form-control border-0 rounded-pill ps-3"
              placeholder="¿Qué estás buscando?"
              aria-label="Search"
            />
            <h4>|</h4>
            <button
              className="input-group-text bg-white border-0 rounded-pill"
              type="submit"
            >
              <img src={lupa} alt="Search Icon" className={styles.searchIcon} />
            </button>
          </div>
        </form>
        {/* hamburguesa */}
        <button
          className="navbar-toggler d-md-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarButtons"
          aria-controls="navbarButtons"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* lo q se va a colapsar */}

        <div
          className="collapse navbar-collapse d-md-flex justify-content-end"
          id="navbarButtons"
        >
          <RegisterButton />
          <LoginButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
