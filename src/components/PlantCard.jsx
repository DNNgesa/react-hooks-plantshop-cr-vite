import React, { useState } from "react";

function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(true);

  function handleStockToggle() {
    setInStock((prevInStock) => !prevInStock);
  }

  return (
    <li className="card d-flex flex-column p-3" data-testid="plant-item">
      <img
        src={plant.image}
        alt={plant.name}
        style={{ height: "240px", objectFit: "cover" }}
      />
      <h4 className="mt-2">{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary mt-auto" onClick={handleStockToggle}>
          In Stock
        </button>
      ) : (
        <button className="mt-auto" onClick={handleStockToggle}>
          Out of Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;
