import { FaStar } from "react-icons/fa";

import { useState } from "react";
import ButtonAction from "../ButtonAction";

type Props = {};

function index({}: Props) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("rating", rating);
    console.log("description", event.currentTarget.description.value);
  };

  const [rating, setRating] = useState(Number);
  const [rateColor] = useState(null);

  return (
    <div
      className="container text-center mt-5"
      style={{ backgroundColor: "rgb(188, 251, 255)" }}
    >
      <div>
        <h1>Califica tu experiencia</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mt-5">
          {[...Array(5)].map((index) => {
            const ratingValue = index + 1;
            return (
              <>
                <label>
                  <input
                    hidden={true}
                    type="radio"
                    name="rate"
                    value={ratingValue}
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
              </>
            );
          })}
        </div>

        <div className="mt-5">
          <textarea
            name="description"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            placeholder="Dejanos saber cual es tu opinion"
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
