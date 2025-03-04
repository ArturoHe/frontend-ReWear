import { useState } from "react";
import ButtonAction from "../ButtonAction";

const Index = () => {
  const [rangePrice, setRangePrice] = useState(1000000);
  const [rangeQuality, setRangeQuality] = useState(10);
  const [filterType, setFilterType] = useState("");

  const handleRangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRangePrice(Number(event.target.value));
  };

  const handleRangeQuality = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRangeQuality(Number(event.target.value));
  };

  const handleFilter = () => {
    console.log("Filtrando...");
    console.log("Precio máximo:", rangePrice);
    console.log("Estado:", rangeQuality);
    console.log("Tipo de prenda:", filterType);

    sessionStorage.setItem("rangePrice", String(rangePrice));
    sessionStorage.setItem("rangeQuality", String(rangeQuality));
    sessionStorage.setItem("filterType", filterType);
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
  );
};

export default Index;
