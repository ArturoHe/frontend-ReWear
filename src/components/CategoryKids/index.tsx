import { useEffect, useState } from "react";
import api from "../../api/axiosConfig";
import { Product } from "../../api/types";
import ProductSearchCard from "../ProductSearchCard";
import SearchVacio from "../SearchVacio";

type Props = { title: string };

function index({ title }: Props) {
  useEffect(() => {
    document.title = title;
  });

  useEffect(() => {
    fetchProducts();
  });

  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const payload = {
      name_product: "",
      category: "niños",
      price: "",
      status: "",
    };

    const response = await api.post("/search/filter", payload);

    const data = response.data as { productInfo: Product[] };
    const productsData = Array.isArray(data.productInfo)
      ? data.productInfo
      : [];

    console.log("Products:", products);

    console.log(response);

    return productsData.map((product: Product) => ({
      id: product.id,
      name_product: product.name_product,
      category: product.category,
      price: Number(product.price).toLocaleString("es-CO"),
      description: product.description,
      seller_id: product.seller_id,
      publication_status: product.publication_status,
      status: product.status,
      image_path: product.image_path,
    }));
  };

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products", err));
  }, []);

  return (
    <div className="container mt-5">
      <div className="col-xs-12 col-lg-12">
        {products.length === 0 ? (
          <SearchVacio />
        ) : (
          products.map((product) => (
            <ProductSearchCard
              id={product.id}
              key={product.id}
              title={product.name_product}
              description={product.description}
              image={product.image_path}
              price={product.price}
              quality={product.status}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default index;
