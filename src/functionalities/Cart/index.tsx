import { useEffect, useState } from "react";
import ButtonAction from "../../components/ButtonAction";
import { ProductCart } from "../../api/types";
import api from "../../api/axiosConfig";
import CardCart from "../../components/CardCart";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
initMercadoPago("APP_USR-325d6d81-d38c-4b7f-ae48-23ef19653cc4", {
  locale: "es-CO",
});

type Props = { title: string };

function Index({ title }: Props) {
  const [products, setProducts] = useState<ProductCart[]>([]);

  useEffect(() => {
    document.title = title;
    fetchProducts(); // Llamar la función para cargar los productos
  }, [title]);

  const fetchProducts = async () => {
    try {
      const token = sessionStorage.getItem("jwtToken");

      const response = await api.get("/cart", {
        headers: { Authorization: token },
      });
      const productsData = response.data as ProductCart[];

      const detailedProducts = await Promise.all(
        productsData.map(async (product) => {
          try {
            const { data } = await api.get<{
              name_product: string;
              description: string;
              image_path: string;
              price: number;
            }>(`/product/${product.product_id}`);

            return {
              ...product,
              name_product: data.name_product,
              description: data.description,
              price: data.price,
              image_path: data.image_path,
            };
          } catch (error) {
            console.log("Error fetching product:", error);
          }
        })
      );

      setProducts(
        detailedProducts.filter((p) => p !== undefined) as ProductCart[]
      );

      console.log("Productos en el carrito:", productsData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const [preferenceId, setPreferenceId] = useState<string | null>(null);

  const payload = {
    items: products.map((product) => ({
      title: product.name_product,
      quantity: 1,
      unit_price: Number(product.price),
    })),
  };

  const createPreference = async () => {
    try {
      const response = await api.post<{ preference_id: string }>(
        "/payment/create_preference",
        payload
      );

      const preferenceId = response.data.preference_id;
      console.log("preferenceId:", preferenceId);

      return preferenceId;
    } catch (error) {
      console.error("Error creating preference:", error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    console.log("preferenceId:", preferenceId);

    if (id) {
      setPreferenceId(id);
    } else {
      alert("Error al crear la preferencia de pago");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sección de productos */}
        <div className="col-lg-9">
          {products.length > 0 ? (
            products.map((product) => (
              <CardCart
                key={product.product_id}
                id={product.product_id}
                image={product.image_path}
                title={product.name_product}
                description={product.description}
                price={Number(product.price).toLocaleString("es-CO")}
              />
            ))
          ) : (
            <h1>No hay productos en el carrito</h1>
          )}
        </div>

        {/* Sección del carrito */}
        <div className="col-lg-3">
          <div
            className="container-fluid mt-3 shadow p-3"
            style={{ borderRadius: "30px", position: "sticky", top: "1rem" }}
          >
            <h1>Carrito</h1>
            <hr />

            {products.map((product) => (
              <div className="row">
                <div className="col-9">{product.name_product}</div>
                <div className="col-3">
                  {Number(product.price).toLocaleString("es-CO")}
                </div>
              </div>
            ))}

            <hr />

            <div className="row">
              <div className="col-9">Total</div>
              <div className="col-3">
                {products
                  .reduce((acc, product) => acc + Number(product.price ?? 0), 0)
                  .toLocaleString("es-CO")}
              </div>
            </div>

            <div className="m-4">
              <ButtonAction text="Comprar" onClick={handleBuy} />

              {preferenceId && (
                <Wallet initialization={{ preferenceId: preferenceId }} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
