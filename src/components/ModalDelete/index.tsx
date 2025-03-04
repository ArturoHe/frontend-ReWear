import api from "../../api/axiosConfig";
import ButtonWarning from "../ButtonWarning";

type Props = {};

function index({}: Props) {
  const username = sessionStorage.getItem("username");

  const handleDelete = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const userConfirm = document.getElementById(
      "userConfirm"
    ) as HTMLInputElement;

    if (userConfirm.value !== username) {
      alert("El nombre de usuario no coincide");
      return;
    } else {
      try {
        await api.delete("/eliminarperfil", {
          headers: { Authorization: sessionStorage.getItem("jwtToken") },
        });
        alert("Usuario eliminado");
        sessionStorage.clear();
        window.location.href = "/home";
      } catch (error) {
        console.log("Error al eliminar usuario", error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleDelete}>
        <div>
          <h1 style={{ fontSize: "1.5rem", textAlign: "center", color: "red" }}>
            Recuerda que la eliminacion de cuenta no se puede deshacer.
          </h1>
        </div>

        <hr />

        <div>
          <p>
            Escribe tu nombre de usuario para confirmar la eliminacion de la
            cuenta
          </p>
        </div>

        <div className="d-flex justify-content-center">
          <input type="text" placeholder={`${username}`} id="userConfirm" />
        </div>

        <div className="mt-5">
          <ButtonWarning type="submit" text="Eliminar Cuenta" />
        </div>
      </form>
    </div>
  );
}

export default index;
