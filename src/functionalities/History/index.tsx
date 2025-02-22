import { useEffect } from "react";

type Props = { title: string };

function index({ title }: Props) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <div>Historial</div>;
}

export default index;
