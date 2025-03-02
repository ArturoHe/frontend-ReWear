import React, { useState } from "react";
import ButtonAction from "../ButtonAction";
import styles from "./style.module.css";
import api from "../../api/axiosConfig";
import { ProductCreate } from "../../api/types";

type Props = {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

function LoginForm({}: Props) {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) {
      alert("Por favor, selecciona un archivo PNG.");
      return;
    }

    const formData = new FormData();
    formData.append("name_product", event.currentTarget.name_product.value);
    formData.append("category", event.currentTarget.category.value);
    formData.append("price", event.currentTarget.price.value);
    formData.append("description", event.currentTarget.description.value);
    formData.append("status", event.currentTarget.cuality.value);
    formData.append("publication_status", "available");
    formData.append("image", file);

    console.log("FormData:", formData);

    const token = sessionStorage.getItem("jwtToken");

    console.log(token);

    if (!token) {
      alert("No hay sesión iniciada");
      return;
    }

    try {
      const response = await api.post("/createproduct", formData, {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("response", response);

      const idNew = response.data as ProductCreate;
      window.location.href = `/product/${idNew.productId}`;
    } catch (error) {
      console.error("Error en la publicación del producto", error);
      alert("Error en la publicación del producto");
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
        <input
          required
          name="name_product"
          type="text"
          className={`form-control ${styles.loginSlot}`}
          placeholder="Nombre del producto"
        />
      </div>
      <div className="my-3">
        <select className="form-select" name="category">
          <option value="">-Categoria-</option>
          <option value="Casual">Casual</option>
          <option value="Deportiva">Deportiva</option>
          <option value="Formal">Formal</option>
          <option value="Urbana">Urbana</option>
          <option value="Vintage">Vintage</option>
        </select>
      </div>
      <div className="my-3">
        <input
          required
          name="price"
          type="number"
          className={`form-control ${styles.loginSlot}`}
          placeholder="Precio"
        />
      </div>
      <div className="my-3">
        <textarea
          name="description"
          className="form-control"
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
      <div className="container text-center my-5">
        <p>Foto</p>
        <div className="row justify-content-between">
          <div className="mb-3">
            <input
              id="formFile"
              type="file"
              name="myImage"
              accept=".png"
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>
      <div>
        <ButtonAction text="Publicar" type="submit" />
      </div>
    </form>
  );
}

export default LoginForm;
