import { useState } from "react";
import ButtonAction from "../ButtonAction";
import styles from "./style.module.css";

type Props = {};

function EditUserForm({}: Props) {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    event?.preventDefault();
    if (!file) {
      alert("Por favor selecciona un archivo");
      return;
    }

    const formData = new FormData();
    formData.append("image", file); // "image" debe coincidir con el nombre que espera el backend

    /*
    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Imagen subida con éxito:", response.data);
    } catch (error) {
      console.error("Error al subir la imagen:", error);
    }*/

    console.log(file);
    console.log("Formulario enviado");
  };

  const handleSubmitName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };
  const handleSubmitPass = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulario enviado");
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
        <h3 className={`${styles.title}`}>Información Personal</h3>
        <hr />
        <form onSubmit={handleSubmitName}>
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

        <form onSubmit={handleSubmitPass}>
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
        <form onSubmit={handleUpload}>
          <div className="container text-center">
            <div className="row justify-content-between">
              <div className="col-4">
                <div className="mb-3">
                  <input
                    type="file"
                    name="myImage"
                    accept="image/png, image/gif, image/jpeg"
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
    </>
  );
}

export default EditUserForm;
