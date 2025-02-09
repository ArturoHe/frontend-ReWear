import ButtonAction from "../ButtonAction";

type Props = {};

function index({}: Props) {
  const handleRangePrice = () => {
    const rangeValue1 = (
      document.getElementById("customRange1") as HTMLInputElement
    ).value;
    (document.getElementById("rangeValue1") as HTMLSpanElement).innerText =
      rangeValue1;
  };

  const handleRangeCuality = () => {
    const rangeValue2 = (
      document.getElementById("customRange2") as HTMLInputElement
    ).value;
    (document.getElementById("rangeValue2") as HTMLSpanElement).innerText =
      rangeValue2;
  };

  return (
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
          onChange={handleRangePrice}
        />
        <div>
          Valor Menor o igual a: <span id="rangeValue1">1000000</span>
        </div>
      </div>

      <hr />

      <div id="searchFilterCuality">
        <label htmlFor="customRange2" className="form-label">
          Estado de la prenda
        </label>
        <input
          type="range"
          className="form-range"
          min="0"
          max="10"
          id="customRange2"
          defaultValue={10}
          onChange={handleRangeCuality}
        />
        <div>
          Estado: <span id="rangeValue2">10</span>
        </div>
      </div>

      <hr />

      <select className="form-select my-3" aria-label="Default select example">
        <option value="tipo de prenda">Tipo de prenda</option>
        <option value="Camiseta">Camiseta</option>
        <option value="Pantalon">Pantalon</option>
        <option value="Sudadera">Sudadera</option>
      </select>

      <ButtonAction text="AplicarFiltros" />
    </div>
  );
}

export default index;
