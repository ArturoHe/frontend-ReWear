import { useState } from "react";
import ButtonAction from "../ButtonAction";
import styles from "./style.module.css";
import api from "../../api/axiosConfig";
import Button from "../Button";

type Props = {};

function EditUserForm({}: Props) {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) {
      alert("Por favor selecciona un archivo");
      return;
    }

    const formData = new FormData();
    formData.append("image", file); // "image" debe coincidir con el nombre que espera el backend

    console.log(formData);

    try {
      const Response = await api.put("/profile/image", formData, {
        headers: {
          Authorization: sessionStorage.getItem("jwtToken"),
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Imagen de perfil actualizada");

      console.log(Response);
    } catch (error) {}

    console.log(file);
    console.log("Formulario enviado");
  };

  const handleDelete = async () => {
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
  };

  const handleSubmitPass = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const verify = {
      password: formData.get("password"),
      password2: formData.get("password2"),
    };

    console.log(verify);

    const payload = {
      token: sessionStorage.getItem("jwtToken"),
      newPassword: verify.password,
    };

    console.log(payload);

    if (verify.password == verify.password2) {
      try {
        await api.post("/update-password", payload);
        alert("Cambio de contraseña exitoso");
      } catch (error) {
        console.log("Error en el cambio de contraseña", error);
      }
    }
  };
  const handleSubmitPhoto = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    const payload = {
      myImage: formData.get("myImage"),
    };
    console.log(handleSubmitPhoto, payload);

    console.log("Formulario enviado");
  };
  return (
    <>
      <div>
        <h3 className={`${styles.title}`}>Contraseña</h3>
        <hr />

        <form onSubmit={handleSubmitPass}>
          <div className="container text-center">
            <div className="row justify-content-between align-items-center">
              <div className="col-4">
                <div className="mb-3">
                  <input
                    required
                    name="password"
                    type="password"
                    className={`form-control ${styles.loginSlot}`}
                    id="passwordSlotLogin"
                    placeholder="Contraseña"
                  />
                </div>
                <div className="mb-3">
                  <input
                    required
                    name="password2"
                    type="password"
                    className={`form-control ${styles.loginSlot}`}
                    id="passwordSlotLogin2"
                    placeholder="Repetir Contraseña"
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
        <form onSubmit={handleUpload}>
          <div className="container text-center">
            <div className="row justify-content-between">
              <div className="col-4">
                <div className="mb-3">
                  <input
                    type="file"
                    name="myImage"
                    accept="image/png"
                    onChange={handleFileChange}
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

      <div className="container text-center my-5">
        <Button text="Eliminar cuenta" onClick={handleDelete} />
      </div>
    </>
  );
}

export default EditUserForm;
