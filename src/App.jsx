import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Contact />
    </>
  );
}

export default App;
