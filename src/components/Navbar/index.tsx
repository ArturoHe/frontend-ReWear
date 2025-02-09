import { Link } from "react-router-dom";
import Button from "../Button";
import ButtonAction from "../ButtonAction";
import styles from "./style.module.css";
import { IoIosSearch } from "react-icons/io";

type Props = {};

function index({}: Props) {
  const logged = sessionStorage.getItem("username");

  const handleLogin = () => {
    window.location.href = "/login";
  };

  const handleClose = () => {
    sessionStorage.clear();
    window.location.href = "/home";
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Buscando...");

    const formData = new FormData(event.currentTarget);
    const payload = {
      searchTerm: formData.get("search"),
    };
    console.log("payload", payload);

    window.location.href = `/search/${payload.searchTerm}`;
  };

  return (
    <nav
      className={`navbar navbar-expand-lg bg-body-tertiary ${styles.navColorRewear}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          <img
            src="/logo.png"
            alt="Logo Rewear"
            width="100%"
            height="60"
            className="d-inline-block align-text-top"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form
            onSubmit={handleSubmit}
            className="d-flex align-items-center  w-100 ms-5"
            role="search"
          >
            <div className="input-group rounded-pill border bg-white">
              <input
                id="search"
                name="search"
                className="form-control me-2"
                type="search"
                placeholder="¿Qué estás buscando?"
                aria-label="Search"
              />

              <button className="btn " type="submit">
                <div style={{ fontSize: "1.5rem" }}>
                  <IoIosSearch />
                </div>
              </button>
            </div>
          </form>

          <div className="container text-center">
            <div className="row align-items-start">
              {logged ? (
                <div className="col mx-5 px-5">
                  <ButtonAction text="Cerrar Sesion" onClick={handleClose} />
                </div>
              ) : (
                <>
                  <div className="col">
                    <ButtonAction text="Crear cuenta" onClick={handleLogin} />
                  </div>
                  <div className="col">
                    <Button text="iniciar Sesión" onClick={handleLogin} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default index;
