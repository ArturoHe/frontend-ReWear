import './style.css'

import { useEffect } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Mission from "../../components/Mission";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/Footer";


type Props = { title: string };

function LandingPage({ title }: Props) {
  useEffect(() => {
    document.title = title;
  });

  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Mission />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default LandingPage;
