import styles from "./style.module.css";

type Props = {
  id?: string;
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset"; // Tipo de botón
};

function Button({ text, onClick, type = "button" }: Props) {
  return (
    <button
      type={type}
      className={`btn btn-primary container-fluid ${styles.button}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
