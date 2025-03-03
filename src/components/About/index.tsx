const About = () => {
  return (
    <section className="about" id="quienes-somos">
      <div className="container">
        <h2 className="section-title">¿Quiénes Somos?</h2>
        <div className="about-grid">
          <div className="about-item">
            <div className="about-icon">🌿</div>
            <h3>Comprometidos con el Medio Ambiente</h3>
            <p>
              Somos una empresa dedicada a promover la sostenibilidad en la
              moda, reduciendo el impacto ambiental de la industria textil.
            </p>
          </div>
          <div className="about-item">
            <div className="about-icon">🔄</div>
            <h3>Economía Circular</h3>
            <p>
              Facilitamos la compra y venta de ropa de segunda mano, fomentando
              un ciclo de consumo más responsable y sostenible.
            </p>
          </div>
          <div className="about-item">
            <div className="about-icon">🤝</div>
            <h3>Comunidad Consciente</h3>
            <p>
              Creamos una comunidad de personas comprometidas con el consumo
              responsable y la moda sostenible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
