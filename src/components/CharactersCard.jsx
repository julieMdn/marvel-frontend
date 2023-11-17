import React from "react";
import "./charactersCard.css";

const CharactersCard = ({ data }) => {
  return (
    <div className="cards-container">
      {data.results.map((character) => (
        <div className="card" key={character._id}>
          {character.thumbnail && (
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
          )}
          <p className="card-title">{character.name}</p>
          <p>{character.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CharactersCard;
