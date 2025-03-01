import api from "../../api/axiosConfig";
import ButtonAction from "../ButtonAction";
import styles from "./style.module.css";

type Props = {
  token: string;
};

function CardLogin({ token }: Props) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const verify = {
      password: formData.get("password"),
      password2: formData.get("password2"),
    };

    const payload = {
      token: token,
      newPassword: verify.password,
    };

    if (verify.password == verify.password2) {
      try {
        await api.post("/update-password", payload);
        alert("Cambio de contraseña exitoso");
        window.location.href = "/login";
      } catch (error) {
        alert("Error en el cambio de contraseña");
      }

      return;
    } else {
      alert("Las contraseñas no coinciden");
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
              <div>
                <input
                  required
                  name="password"
                  type="password"
                  className={`form-control ${styles.loginSlot}`}
                  id="passwordSlotLogin"
                  placeholder="Contraseña"
                />
              </div>
              <div className="my-3">
                <input
                  required
                  name="password2"
                  type="password"
                  className={`form-control ${styles.loginSlot}`}
                  id="passwordSlotLogin2"
                  placeholder="Repetir Contraseña"
                />
              </div>

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
