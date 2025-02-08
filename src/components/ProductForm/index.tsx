import React from "react";
import ButtonAction from "../ButtonAction";
import styles from "./style.module.css";

type Props = {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

function LoginForm({}: Props) {
  return (
    <form method="POST" action="">
      <div className="my-3">
        <label htmlFor="productName" className="form-label"></label>
        <input
          required
          name="productName"
          type="text"
          className={`form-control ${styles.loginSlot}`}
          id="productName"
          placeholder="Nombre del producto"
        />
      </div>
      <div className="my-3">
        <label htmlFor="productCategory" className="form-label"></label>
        <input
          required
          name="category"
          type="text"
          className={`form-control ${styles.loginSlot}`}
          id="productCategory"
          placeholder="Categoria"
        />
      </div>

      <div>
        <h5>Fotos</h5>
        <div className="mb-3">
          <input
            type="file"
            name="myImage"
            accept="image/png, image/gif, image/jpeg"
          />
        </div>
      </div>

      <div className="my-3">
        <label htmlFor="description" className="form-label"></label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
          placeholder="Descripcion"
        ></textarea>
      </div>

      <div>
        <ButtonAction text="Entrar" type="submit" />
      </div>
    </form>
  );
}

export default LoginForm;
