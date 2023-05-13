import React, { useState } from "react";

export default function About() {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [fontColor, setFontColor] = useState("black");

  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color);
  };

  const handleFontColorChange = (color) => {
    setFontColor(color);
  };

  return (
    <div style={{ backgroundColor, color: fontColor }}>
      <h1>O nas</h1>
      <style>
        {`
          body {
            background-color: ${backgroundColor};
            color: ${fontColor};
          }
        `}
      </style>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat tellus vitae ligula molestie efficitur. Vivamus sit amet sem ut enim cursus dignissim. Nunc mattis fringilla orci, id aliquam dolor varius at. Aliquam ultrices turpis id eros varius ultrices. Sed tincidunt lorem eget odio viverra interdum. Ut vitae massa vel velit hendrerit aliquet. Sed vitae orci odio. Pellentesque sed faucibus nisi. Nam aliquam sem euismod elementum auctor. Ut maximus tincidunt justo, a bibendum purus efficitur non. Morbi volutpat, nisl eget cursus pellentesque, lorem nunc tristique metus, vel sollicitudin libero nulla in mauris. Aliquam consequat mauris at lacus ultricies, vitae cursus metus ullamcorper.</p>
      <p>Phasellus lacinia, dolor eget mattis fermentum, erat purus finibus tellus, vel hendrerit est ipsum in turpis. Proin tincidunt dui nec nisl bibendum, a elementum lectus lobortis. Suspendisse non pellentesque turpis. Aenean convallis lacus et dolor sollicitudin, id semper metus convallis. Proin ac enim vitae neque lobortis posuere. Duis sit amet aliquam nisl. Mauris scelerisque dapibus felis, ac condimentum nunc cursus non. Etiam non odio tristique, iaculis purus eu, lacinia nisi. Sed vitae odio id velit faucibus congue. Nulla dictum arcu nec tortor tempus posuere. Nulla facilisi. Aliquam sit amet ante vel nulla ullamcorper ullamcorper et et leo. Duis efficitur odio a tempor condimentum.</p>
      <div className="color-controls">
        <label>
          Kolor tła:
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => handleBackgroundColorChange(e.target.value)}
          />
        </label>
        <label>
          Kolor czcionki:
          <input
            type="color"
            value={fontColor}
            onChange={(e) => handleFontColorChange(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}
