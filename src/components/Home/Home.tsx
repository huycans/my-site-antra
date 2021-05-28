import React from "react";
import Aboutme from "../Aboutme/Aboutme";
import Summary from "../Summary/Summary";
import WelcomeBanner from "../WelcomeBanner/WelcomeBanner";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";

import "./home.css";

export default function Home() {
  return (
    <>
      <WelcomeBanner></WelcomeBanner>
      <Aboutme></Aboutme>
      <Summary></Summary>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </>
  );
}
