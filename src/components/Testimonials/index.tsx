const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Lo que dicen nuestros usuarios</h2>
        <div className="testimonials-grid">
          <div className="testimonial-item">
            <p className="testimonial-title">
              ¿Usaría usted una plataforma enfocada en la compra o venta de ropa
              usada?
            </p>
            <p>
              Un 76.2% de los usuarios de ReWear estaría dispuesto a comprar
              ropa de segunda mano.
            </p>
            <img
              src="/graph1.png?height=600&width=600"
              alt="Ha comprado ropa de segunda mano"
              style={{
                width: "20em",
              }}
            />
          </div>
          <div className="testimonial-item">
            <p className="testimonial-title">
              ¿Le gustaría o ha vendido ropa usada la cual ya no le da uso?
            </p>
            <p>
              El 61,9% de los usuarios de ReWear le gustaría o ha vendido ropa
              de segunda mano.
            </p>
            <img
              src="/graph2.png?height=600&width=600"
              alt="Esta dispuesto a vender comprar de segunda mano"
              style={{
                width: "20em",
              }}
            />
          </div>
          <div className="testimonial-item">
            <p className="testimonial-title">
              ¿Está dispuesto a comprar ropa de segunda mano?
            </p>
            <p>
              El 71.4% de los usuarios de ReWear afirma que usaría una
              plataforma enfocada en la compra y venta de ropa usada.
            </p>
            <img
              src="/graph1.png?height=600&width=600"
              alt="Le gustaría comprar ropa de segunda mano"
              style={{
                width: "20em",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
