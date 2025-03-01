type Props = {
  productName: string;
  price: string;
  category: string;
  description: string;
  quality: number;
};

function index({ productName, price, category, description, quality }: Props) {
  return (
    <>
      <h1 style={{ fontWeight: "bold" }}>{productName}</h1>
      <h2 className="my-3" style={{ fontSize: "1.3rem" }}>
        Precio: {price}
      </h2>
      <h4 className="my-3" style={{ fontSize: "1.3rem" }}>
        Calidad: {quality}
      </h4>
      <h5 className="my-3" style={{ fontSize: "1rem" }}>
        Categoria: {category}
      </h5>
      <h5 className="my-3" style={{ fontSize: "1rem" }}>
        Descripcion:
        <div className="mt-2">
          <p
            style={{
              overflowWrap: "break-word",
            }}
          >
            {description}
          </p>
        </div>
      </h5>
    </>
  );
}

export default index;
