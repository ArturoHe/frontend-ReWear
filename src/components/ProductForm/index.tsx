import React from "react";
import ButtonAction from "../ButtonAction";
import styles from "./style.module.css";
import api from "../../api/axiosConfig";
import { ProductCreate } from "../../api/types";

type Props = {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

function LoginForm({}: Props) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const payload = {
      name_product: formData.get("name_product"),
      category: formData.get("category"),
      price: formData.get("price"),
      description: formData.get("description"),
      status: formData.get("cuality"),
    };

    console.log("payload", payload);

    const token = sessionStorage.getItem("jwtToken");

    if (!token) {
      alert("No hay sesion iniciada");
      return;
    }

    try {
      const response = await api.post("/createproduct", payload, {
        headers: {
          Authorization: `${token}`,
        },
      });

      console.log("response", response);

      const idNew = response.data as ProductCreate;
      window.location.href = `/product/${idNew.productId}`;
    } catch (error) {
      console.error("Error en la publicaciond de producto", error);
      alert("Error en la publicacion del producto");
    }
  };

  const handleRangeCuality = () => {
    const rangeValue2 = (
      document.getElementById("customRange2") as HTMLInputElement
    ).value;
    (document.getElementById("rangeValue2") as HTMLSpanElement).innerText =
      rangeValue2;
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="my-3">
        <label htmlFor="name_product" className="form-label"></label>
        <input
          required
          name="name_product"
          type="text"
          className={`form-control ${styles.loginSlot}`}
          id="productName"
          placeholder="Nombre del producto"
        />
      </div>
      <div className="my-3">
        <label htmlFor="category" className="form-label"></label>
        <input
          required
          name="category"
          type="text"
          className={`form-control ${styles.loginSlot}`}
          id="productCategory"
          placeholder="Categoria"
        />
      </div>

      <div className="my-3">
        <label htmlFor="price" className="form-label"></label>
        <input
          required
          name="price"
          type="number"
          className={`form-control ${styles.loginSlot}`}
          id="price"
          placeholder="Precio"
        />
      </div>

      <div className="my-3">
        <label htmlFor="description" className="form-label"></label>
        <textarea
          name="description"
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
          placeholder="Descripcion"
        ></textarea>
      </div>

      <div className="my-3" id="searchFilterCuality">
        <label htmlFor="cuality" className="form-label">
          Estado de la prenda
        </label>
        <input
          name="cuality"
          type="range"
          className="form-range"
          min="0"
          max="10"
          id="customRange2"
          defaultValue={10}
          onChange={handleRangeCuality}
        />
        <div>
          Estado: <span id="rangeValue2">10</span>
        </div>
      </div>

      <div>
        <ButtonAction text="Publicar" type="submit" />
      </div>
    </form>
  );
}

export default LoginForm;
