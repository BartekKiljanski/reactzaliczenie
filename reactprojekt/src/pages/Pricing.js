import React, { useState } from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$9.99",
      features: ["1 User", "10 Projects", "10GB Storage"],
    },
    {
      name: "Pro",
      price: "$19.99",
      features: ["5 Users", "50 Projects", "50GB Storage"],
    },
    {
      name: "Enterprise",
      price: "$99.99",
      features: ["Unlimited Users", "Unlimited Projects", "Unlimited Storage"],
    },
  ];

  const [backgroundColor, setBackgroundColor] = useState("white");
  const [fontColor, setFontColor] = useState("black");

  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color);
  };

  const handleFontColorChange = (color) => {
    setFontColor(color);
  };

  
  return (
    <div className="pricing" style={{ color: fontColor }}>
      <style>
        {`
          body {
            background-color: ${backgroundColor};
          }
        `}
      </style>
    
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
        <h2>Cennik</h2>
      </div>
      <div className="plans">
        {plans.map((plan, index) => (
          <div className="plan" key={index}>
            <h3>{plan.name}</h3>
            <div className="price">{plan.price}</div>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
