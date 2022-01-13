import React, { useState } from "react";
import "./styles.css";
import NavBar from "./NavBar";
import Featured from "./Featured";
import FindPad from "./FindPad";
import { SliderData } from "./Data/SliderData";
import NewPads from "./NewPads";
import { PadData } from "./Data/PadData";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import Dropdown from "./Dropdown";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <NavBar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Featured slides={SliderData} />
      <FindPad />
      <NewPads pads={PadData} />
      <NewsLetter />
      <Footer />
    </div>
  );
}
