import React from "react";

const ItemCard = ({ character }) => {
  return (
    <div className="item-card">
      <h2>{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
    </div>
  );
};

export default ItemCard;
