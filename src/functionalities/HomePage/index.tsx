import './style.css'
import Carousel from "../../components/Carousel";
import Categories from "../../components/Categories";
import { useEffect } from "react";

type Props = {
  title: string;
};

function HomePage({ title }: Props) {
  useEffect(() => {
    document.title = title;
  });

  return (
    <main>
      <Carousel />
      <Categories />
    </main>
  );
}

export default HomePage;
