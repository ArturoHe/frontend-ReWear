import React, { useEffect, useState } from "react";
import ButtonAction from "../ButtonAction";
import styles from "./style.module.css";
import api from "../../api/axiosConfig";
import { ProductResponse } from "../../api/types";
import { useParams } from "react-router-dom";

type Props = {
  title: string;
};

function LoginForm({}: Props) {
  const { id } = useParams<{ id: string }>();
  const [productData, setProductData] = useState<ProductResponse | null>(null);

  const fetchProduct = async (id: string) => {
    const response = await api.get(`/product/${id}`);
    setProductData(response.data as ProductResponse);
  };

  useEffect(() => {
    if (id) {
      fetchProduct(id);
    }
  }, [id]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      name_product: productData?.name_product,
      category: productData?.category,
      price: productData?.price,
      description: productData?.description,
      status: productData?.status,
    };

    const token = sessionStorage.getItem("jwtToken");

    if (!token) {
      alert("No hay sesión iniciada");
      return;
    }

    try {
      const response = await api.put(`/product/${id}`, payload, {
        headers: {
          Authorization: `${token}`,
        },
      });
      console.log("Producto editado", response.data);

      window.location.href = `/product/${id}`;
    } catch (error) {
      console.error("Error en la publicación del producto", error);
      alert("Error en la publicación del producto");
    }
  };

  const handleChange = (field: keyof ProductResponse, value: any) => {
    setProductData((prev) => ({ ...prev!, [field]: value }));
  };

  return (
    <div className="container w-50">
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <input
            required
            name="name_product"
            type="text"
            className={`form-control ${styles.loginSlot}`}
            placeholder="Nombre del producto"
            value={productData?.name_product || ""}
            onChange={(e) => handleChange("name_product", e.target.value)}
          />
        </div>
        <div className="my-3">
          <input
            required
            name="category"
            type="text"
            className={`form-control ${styles.loginSlot}`}
            placeholder="Categoría"
            value={productData?.category || ""}
            onChange={(e) => handleChange("category", e.target.value)}
          />
        </div>

        <div className="my-3">
          <input
            required
            name="price"
            type="number"
            className={`form-control ${styles.loginSlot}`}
            placeholder="Precio"
            value={productData?.price || ""}
            onChange={(e) => handleChange("price", e.target.value)}
          />
        </div>

        <div className="my-3">
          <textarea
            name="description"
            className="form-control"
            rows={3}
            placeholder="Descripción"
            value={productData?.description || ""}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>

        <div className="my-3">
          <label htmlFor="cuality" className="form-label">
            Estado de la prenda
          </label>
          <input
            name="cuality"
            type="range"
            className="form-range"
            min="0"
            max="10"
            value={productData?.status || 10}
            onChange={(e) => handleChange("status", e.target.value)}
          />
          <div>Estado: {productData?.status || 10}</div>
        </div>

        <div>
          <ButtonAction text="Publicar" type="submit" />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
