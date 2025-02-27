import Button from "../Button";
import ButtonAction from "../ButtonAction";
import styles from "./style.module.css";

type Props = {};

function CardLogin({}: Props) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = {
      password: formData.get("password"),
      password2: formData.get("password2"),
    };

    if (payload.password !== payload.password2) {
      alert("Las contraseñas no coinciden");
      return;
    } else {
      alert("Contraseña cambiada con éxito");
    }
  };

  return (
    <div className="d-flex col-sm-8 col-md-8 col-lg-12 col-xl-10">
      <div className={`card shadow ${styles.cardLogin}`}>
        <div className="container-fluid px-5 py-3">
          <img src="/logo.png" className="card-img-top" alt="Logo ReWear" />
        </div>
        <div className="card-body" style={{ textAlign: "center" }}>
          <div className="mx-5">
            <form onSubmit={handleSubmit}>
              <input
                required
                name="password"
                type="password"
                className={`form-control ${styles.loginSlot}`}
                id="passwordSlotLogin"
                placeholder="Contraseña"
              />
              <input
                required
                name="password2"
                type="password"
                className={`form-control ${styles.loginSlot}`}
                id="passwordSlotLogin2"
                placeholder="Repetir Contraseña"
              />

              <div>
                <ButtonAction text="test" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardLogin;
