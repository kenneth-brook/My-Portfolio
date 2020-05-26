import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./Components/header/Header";
import Nav from "./Components/nav/Nav";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
