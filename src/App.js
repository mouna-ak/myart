import "./App.css";
import Header from "./componnents/Header";
import Footer from "./componnents/Footer";
import { Routes, Route } from "react-router-dom";

import Home from "./componnents/Pages/Home";
import Formulaire from "./componnents/Pages/Formulaire";
import Quisommes from "./componnents/Quisommes";
import Artworks from "./componnents/Pages/artworks";

function App() {
  return (
    <>
      <Header />
      <div className="App min-vh-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formulaire" element={<Formulaire />} />
          <Route path="/about" element={<Quisommes />} />
          <Route path="/artworks" element={<Artworks />} />

        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
