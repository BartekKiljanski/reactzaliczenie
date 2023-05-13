import React from "react";

function Product({ id, name, price }) {
  return (
    <div key={id} className="product">
      <h3>{name}</h3>
      <p>{price} zł</p>
    </div>
  );
}

export default Product;
