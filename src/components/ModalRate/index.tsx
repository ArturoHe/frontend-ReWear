import { FaStar } from "react-icons/fa";

import { useState } from "react";
import ButtonAction from "../ButtonAction";
import api from "../../api/axiosConfig";

type Props = {
  idSeller: string;
  idProduct: string;
};

function index({ idProduct, idSeller }: Props) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("rating", rating);
    console.log("description", event.currentTarget.description.value);

    const payload = {
      productId: idProduct,
      rating: rating,
      comment: event.currentTarget.description.value,
    };

    try {
      const response = await api.post(`/reviews/${idSeller}`, payload, {
        headers: { Authorization: sessionStorage.getItem("jwtToken") },
      });
      console.log("response", response);
      alert("Gracias por tu calificación");
      window.location.reload();
    } catch (error) {
      alert("Este producto ya ha sido calificado");
    }
  };

  const [rating, setRating] = useState(Number);
  const [rateColor] = useState(null);

  return (
    <div className="container text-center mt-5">
      <div>
        <h1>Califica tu experiencia con el Vendedor</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mt-5">
          {[...Array(5)].map((_, index) => {
            const ratingValue = index + 1;
            return (
              <div key={ratingValue} style={{ display: "inline-block" }}>
                <label>
                  <input
                    type="radio"
                    name="rate"
                    value={ratingValue}
                    style={{ display: "none" }}
                  />
                  <FaStar
                    onClick={() => setRating(ratingValue)}
                    size={"3rem"}
                    color={
                      ratingValue <= (rateColor || rating)
                        ? "#ffc107"
                        : "#e4e5e9"
                    }
                  />
                </label>
              </div>
            );
          })}
        </div>

        <div className="mt-5">
          <textarea
            name="description"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            placeholder="Déjanos saber cual es tu opinion acerca de este vendedor"
          ></textarea>
        </div>

        <div className="mt-5">
          <ButtonAction text="Enviar" type="submit" />
        </div>
      </form>
    </div>
  );
}

export default index;
