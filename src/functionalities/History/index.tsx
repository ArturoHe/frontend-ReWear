import { useEffect, useState } from "react";
import ProductHistoryCard from "../../components/ProductHistoryCard";
import { ProductCart } from "../../api/types";
import api from "../../api/axiosConfig";

type Props = { title: string };

function index({ title }: Props) {
  useEffect(() => {
    document.title = title;
  }, [title]);

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
              seller_id: string;
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
              seller: data.seller_id,
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

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* Sección de productos */}
          <div className="col-lg-12">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductHistoryCard
                  id={product.product_id.toString()}
                  title={product.name_product}
                  description={product.description}
                  image={product.image_path || ""}
                  price={Number(product.price)}
                  date="2025-02-28"
                  seller={product.seller}
                />
              ))
            ) : (
              <h1>No hay productos en el carrito</h1>
            )}
          </div>

          {/* Sección del carrito */}
        </div>
      </div>
    </>
  );
}

export default index;
