type Props = { image: string };

function index({ image }: Props) {
  return (
    <div className="card" style={{ minWidth: "30rem" }}>
      <img
        src={image}
        className="card-img"
        alt="..."
        style={{ objectFit: "fill", height: "15rem" }}
      />
      <div className="card-img-overlay"></div>
    </div>
  );
}

export default index;
