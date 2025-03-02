import { useEffect, useState } from "react";
import api from "../../api/axiosConfig";
import ProductSearchCard from "../../components/ProductSearchCard";
import SearchFilters from "../../components/SearchFilters";

import { Product } from "../../api/types";
import { useParams } from "react-router-dom";

type Props = { title: string };

function Index({ title }: Props) {
  const { filter } = useParams<{ filter: string }>();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    document.title = title;
  }, [title]);

  const fetchProducts = async (): Promise<Product[]> => {
    try {
      const response = await api.get(`/search/${filter}`);
      console.log("Response data:", response.data);

      const data = response.data as { productInfo: Product[] };
      const productsData = Array.isArray(data.productInfo)
        ? data.productInfo
        : [];

      console.log("Products:", products);

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
    } catch (error) {
      console.error("Error fetching products", error);
      return [];
    }
  };

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products", err));
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-lg-3">
            <SearchFilters />
          </div>

          <div className="col-xs-12 col-lg-9">
            {products.map(
              (product) => (
                console.log("Product:", product.id),
                (
                  <ProductSearchCard
                    id={product.id}
                    key={product.id}
                    title={product.name_product}
                    description={product.description}
                    image={product.image_path}
                    price={product.price}
                    quality={product.status}
                  />
                )
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
