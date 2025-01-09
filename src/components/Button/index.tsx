import React from "react";
import "./style.css";

type Props = {
  text: string;
};

function Button({ text }: Props) {
  return (
    <button type="button" className="btn btn-primary button">
      {text}
    </button>
  );
}

export default Button;
