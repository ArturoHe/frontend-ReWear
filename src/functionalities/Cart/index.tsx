import { useEffect } from "react";

type Props = { title: string };

function index({ title }: Props) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return <div>carrito</div>;
}

export default index;
