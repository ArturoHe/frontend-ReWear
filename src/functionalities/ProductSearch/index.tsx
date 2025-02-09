import { useEffect, useState } from "react";
import api from "../../api/axiosConfig";
import ProductSearchCard from "../../components/ProductSearchCard";
import SearchFilters from "../../components/SearchFilters";

import { Product, ProductResponse } from "../../api/types";

type Props = { title: string };

function Index({ title }: Props) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    document.title = title;
  }, [title]);

  const fetchProducts = async (): Promise<Product[]> => {
    const response = await api.get<ProductResponse[]>("/products");

    return response.data.map((product) => ({
      id: product.idproduct,
      name: product.name_product,
      category: product.category,
      price: parseFloat(product.price),
      description: product.description,
      seller_id: product.seller_id,
    }));
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
            {products.map((product) => (
              <ProductSearchCard
                id={product.id}
                key={product.id}
                title={product.name}
                description={product.description}
                image={"texerror.jpg"}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
