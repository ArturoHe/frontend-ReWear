import ButtonAction from "../ButtonAction";
import styles from "./style.module.css";

type Props = {};

function EditUserForm({}: Props) {
  return (
    <>
      <div>
        <h3 className={`${styles.title}`}>Información Personal</h3>
        <hr />
        <form>
          <div className="container text-center">
            <div className="row justify-content-between">
              <div className="col-4">
                <div className="mb-3">
                  <input
                    type="text"
                    className={`form-control ${styles.input}`}
                    id="username"
                    aria-describedby="username"
                    placeholder="Nuevo nombre de usuario"
                  />
                </div>
              </div>
              <div className="col-4">
                <ButtonAction text="Cambiar" type="submit" />
              </div>
            </div>
          </div>
        </form>
      </div>

      <div>
        <h3 className={`${styles.title}`}>Contraseña</h3>
        <hr />

        <form>
          <div className="container text-center">
            <div className="row justify-content-between align-items-center">
              <div className="col-4">
                <div className="mb-3">
                  <input
                    type="password"
                    className={`form-control ${styles.input}`}
                    id="actualpassword"
                    aria-describedby="actualpassword"
                    placeholder="Contraseña Actual"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className={`form-control ${styles.input}`}
                    id="newpassword"
                    aria-describedby="newpassword"
                    placeholder="Contraseña Actual"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className={`form-control ${styles.input}`}
                    id="password"
                    aria-describedby="password"
                    placeholder="Contraseña Actual"
                  />
                </div>
              </div>

              <div className="col-4">
                <ButtonAction text="Cambiar" type="submit" />
              </div>
            </div>
          </div>
        </form>
      </div>

      <div>
        <h3 className={`${styles.title}`}>Imagen de perfil</h3>
        <hr />
        <form>
          <div className="container text-center">
            <div className="row justify-content-between">
              <div className="col-4">
                <div className="mb-3">
                  <input
                    type="file"
                    name="myImage"
                    accept="image/png, image/gif, image/jpeg"
                  />
                </div>
              </div>
              <div className="col-4">
                <ButtonAction text="Cambiar" type="submit" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditUserForm;
