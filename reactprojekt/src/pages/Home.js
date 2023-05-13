import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [titleColor, setTitleColor] = useState("black");
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [fontColor, setFontColor] = useState("black");

  const changeColor = () => {
    const newTitleColor = titleColor === "black" ? "red" : "black";
    const newBackgroundColor = backgroundColor === "white" ? "lightblue" : "white";
    setTitleColor(newTitleColor);
    setBackgroundColor(newBackgroundColor);
  };

  const handleFontColorChange = (color) => {
    setFontColor(color);
  };

  return (
    <div className="home" style={{ backgroundColor, color: fontColor }}>
      <div className="hero">
        <button className="change-color-button" onClick={changeColor}>
          Zmień kolor
        </button>
        <div className="color-controls">
          <label>
            Kolor czcionki:
            <input
              type="color"
              value={fontColor}
              onChange={(e) => handleFontColorChange(e.target.value)}
            />
          </label>
        </div>
        <h1 className="hero-title" style={{ color: titleColor }}>
          Dyski pamięci
        </h1>
        <p className="hero-subtitle">Najlepsza jakość w najlepszych cenach</p>
        <Link to="/pricing" className="hero-button">
          Zobacz Ofertę
        </Link>
      </div>
      <div className="features">
        <div className="feature">
          <h2 >Szybka Dostawa</h2>
          <p >
            Zamówienia są realizowane w ciągu 24 godzin od momentu zamówienia.
          </p>
        </div>
        <div className="feature">
          <h2>Bezpieczne Transakcje</h2>
          <p >
            Transakcje przetwarzane są za pomocą bezpiecznych i niezawodnych systemów płatniczych.
          </p>
        </div>
        <div className="feature">
          <h2 >Najlepsza Jakość</h2>
          <p >
            Dyski pamięci są wykonane z najwyższej jakości materiałów, aby zapewnić trwałość i niezawodność.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
