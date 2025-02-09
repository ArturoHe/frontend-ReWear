type Props = {
  id: number;
  title: string;
  price: number;
};

function index({ title, price }: Props) {
  return (
    <div
      className="card text-center"
      style={{ minWidth: "12rem", minHeight: "12rem" }}
    >
      <img
        src="/texerror.jpg"
        className="card-img-top"
        alt="..."
        style={{ height: "50%", objectFit: "cover" }}
      />
      <div className="card-body" style={{ padding: "0.5rem", height: "20%" }}>
        <h5 className="card-title" style={{ fontSize: "1rem" }}>
          {" "}
          {title}
        </h5>
        <p className="card-text mb-0">$ {price}</p>
        <a href="#" className="stretched-link m-0 p-0"></a>
      </div>
    </div>
  );
}

export default index;
