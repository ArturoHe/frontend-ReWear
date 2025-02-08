import styles from "./style.module.css";

type Props = {};

function LandingPage({}: Props) {
  return (
    <>
      <div className={`container-fluid ${styles.LandingBackground}`}>
        <div className="container pt-5">
          <div className="col-6 pt-5 mt-5">
            <h3>¿Quienes Somos?</h3>
            <p>
              Somos una empresa comprometida con el medio ambiente y la
              sostenibilidad, queremos que tu seas parte de este cambio.
            </p>
          </div>
          <div className="col-6 mt-5">
            <h3>¿Qué queremos?</h3>
            <p>
              Queremos proveer una plataforma en la que puedas comprar y vender
              tu ropa de segunda mano.
              <br />
              ¡Tu ganas dinero, el planeta gana un respiro!
            </p>
          </div>

          <div className="row mt-5 pt-5">
            <div className="col-6">
              <div
                className="card text-bg-dark mb-3"
                style={{ borderRadius: "30px" }}
              >
                <div className="card-header">Mision</div>
                <div className="card-body">
                  <p>
                    Transformar la forma en que los colombianos perciben y
                    consumen prendas de ropa, conectando a usuarios por medio de
                    una plataforma web que promueve la reventa de ropa,
                    permitiendo dar nueva vida a prendas en buen estado y
                    contribuyendo a una economía circular más sostenible,
                    accesible y responsable. Favorecemos la reducción del
                    desperdicio textil y generamos un impacto ambiental
                    positivo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div
                className="card text-bg-dark mb-3"
                style={{ borderRadius: "30px" }}
              >
                <div className="card-header">Vision</div>
                <div className="card-body">
                  <p>
                    Para el año 2028, seremos la plataforma líder en Colombia en
                    moda sostenible, reconocida por nuestro impacto positivo en
                    la reducción de la huella de carbono. Aspiramos a
                    convertirnos en un referente nacional de consumo responsable
                    y consciente, demostrando que la moda sostenible puede ser
                    económicamente atractiva, inclusiva y una herramienta
                    efectiva para combatir el cambio climático.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
