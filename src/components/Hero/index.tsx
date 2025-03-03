const Hero = () => {

  const handleHome = () => {
    window.location.href = "/home";
  };

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            ¿Ropa que ya no usas?
            <br />
            ¡Vendela en ReWear!
          </h1>
          <p className="hero-subtitle">
            Cuida el planeta y obtén dinero en el proceso.
          </p>
          <button onClick={handleHome} className="cta-button">Comienza a vender</button>
        </div>
        <div className="hero-image">
          <img
            src="/landing2.jpg?height=600&width=600"
            alt="Ropa de segunda mano"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
