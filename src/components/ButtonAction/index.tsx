import styles from "./style.module.css";

type Props = {
  text: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function ButtonAction({ text, ...props }: Props) {
  return (
    <button
      className={`btn btn-primary container-fluid ${styles.button}`}
      {...props}
    >
      {text}
    </button>
  );
}

export default ButtonAction;
