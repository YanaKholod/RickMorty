import React from "react";

const CharacterItem = ({ character }) => {
  return (
    <div className="character-item">
      <h2>{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      {/* Add more character details as needed */}
    </div>
  );
};

export default CharacterItem;
