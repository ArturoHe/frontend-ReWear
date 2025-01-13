import React from "react";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import Categories from "../../components/Categories";

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Categories />
    </div>
  );
};

export default HomePage;
