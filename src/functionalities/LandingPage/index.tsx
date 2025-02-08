import { useEffect } from "react";

import LandingPageFirst from "../../components/LandingPageFirst";
import LandingPageSecond from "../../components/LandingPageSecond";

type Props = { title: string };

function LandingPage({ title }: Props) {
  useEffect(() => {
    document.title = title;
  });

  return (
    <>
      <LandingPageFirst />
      <LandingPageSecond />
    </>
  );
}

export default LandingPage;
