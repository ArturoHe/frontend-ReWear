import { useEffect, useState } from "react";
import api from "../../api/axiosConfig";
import ProductSearchCard from "../../components/ProductSearchCard";

import { Product } from "../../api/types";
import { useParams } from "react-router-dom";
import ButtonAction from "../../components/ButtonAction";

type Props = { title: string };

function Index({ title }: Props) {
  const { filter } = useParams<{ filter: string }>();

  const [rangePrice, setRangePrice] = useState(1000000);
  const [rangeQuality, setRangeQuality] = useState(0);
  const [filterType, setFilterType] = useState("");

  const [products, setProducts] = useState<Product[]>([]);

  const handleRangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRangePrice(Number(event.target.value));
  };

  const handleRangeQuality = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRangeQuality(Number(event.target.value));
  };

  const handleFilter = async () => {
    const payload = {
      name_product: `${filter}`,
      category: filterType,
      price: rangePrice,
      status: rangeQuality,
    };

    try {
      const response = await api.post("/search/filter", payload);

      const data = response.data as { productInfo: Product[] };
      const productsData = Array.isArray(data.productInfo)
        ? data.productInfo
        : [];

      console.log("Products:", products);

      console.log(payload.category);

      setProducts(
        productsData.map((product: Product) => ({
          id: product.id,
          name_product: product.name_product,
          category: product.category,
          price: Number(product.price).toLocaleString("es-CO"),
          description: product.description,
          seller_id: product.seller_id,
          publication_status: product.publication_status,
          status: product.status,
          image_path: product.image_path,
        }))
      );
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

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

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-lg-3">
            <div style={{ position: "sticky", top: "1rem" }}>
              <div
                className="container-fluid p-5 mt-3"
                style={{
                  backgroundColor: "rgba(11, 113, 66, 0.5)",
                  borderRadius: "30px",
                  padding: "10px",
                }}
              >
                <div id="searchFilterPrice">
                  <label htmlFor="customRange1" className="form-label">
                    Valor de la prenda
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    min="1000"
                    max="1000000"
                    step="1000"
                    id="customRange1"
                    value={rangePrice}
                    onChange={handleRangePrice}
                  />
                  <div>
                    Valor Menor o igual a: <span>{rangePrice}</span>
                  </div>
                </div>

                <hr />

                <div id="searchFilterQuality">
                  <label htmlFor="customRange2" className="form-label">
                    Estado de la prenda
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="10"
                    id="customRange2"
                    value={rangeQuality}
                    onChange={handleRangeQuality}
                  />
                  <div>
                    Estado: <span>{rangeQuality}</span>
                  </div>
                </div>

                <hr />

                <select
                  className="form-select my-3"
                  aria-label="Default select example"
                  id="searchFilterType"
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                >
                  <option value="">Tipo de prenda</option>
                  <option value="Infantil">Infantil</option>
                  <option value="Mujer">Mujer</option>
                  <option value="Hombre">Hombre</option>
                  <option value="Unisex">Unisex</option>
                </select>

                <ButtonAction text="Aplicar Filtros" onClick={handleFilter} />
              </div>
            </div>
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
