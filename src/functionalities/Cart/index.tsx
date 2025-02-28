import { useEffect, useState } from "react";
import ButtonAction from "../../components/ButtonAction";
import { ProductCart } from "../../api/types";
import api from "../../api/axiosConfig";
import CardCart from "../../components/CardCart";

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
              price: number;
            }>(`/product/${product.product_id}`);

            return {
              ...product,
              name_product: data.name_product,
              description: data.description,
              price: data.price,
            };
          } catch (error) {
            console.log("Error fetching product:", error);
          }
        })
      );

      setProducts(detailedProducts);

      /*productsData.forEach(async (product) => {
        try {
          const cardData = await api.get<{
            name_product: string;
            description: string;
            price: number;
          }>(`/product/${product.product_id}`);

          cartData.push({
            name_product: cardData.data.name_product,
            description: cardData.data.description,
            price: cardData.data.price,
            product_id: product.product_id,
          });
        } catch (error) {}
      });*/

      console.log("Productos en el carrito:", productsData);
    } catch (error) {
      console.error("Error fetching products:", error);
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
                image="https://softmanagement.com.co/wp-content/uploads/2024/10/placeholder.png"
                title={product.name_product}
                description={product.description}
                price={product.price}
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
            <div className="row">
              <div className="col-9">HOLA</div>
              <div className="col-3">100</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-9">Total</div>
              <div className="col-3">700</div>
            </div>
            <div className="m-4">
              <ButtonAction text="Comprar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
