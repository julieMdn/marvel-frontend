import React, { useState } from "react";
import "./charactersCard.css";

const CharactersCard = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCharacters = data.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Rechercher un personnage"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="cards-container">
        {filteredCharacters.map((character) => (
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
    </div>
  );
};

export default CharactersCard;
