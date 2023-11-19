import React from "react";
import "./comicsCard.css";

const ComicsCard = ({ data }) => {
  // Trier les comics par le deuxième mot dans le titre
  const sortedComics = data.results.sort((a, b) => {
    const titleA = a.title.split(" ")[1];
    const titleB = b.title.split(" ")[1];

    return titleA.localeCompare(titleB);
  });

  return (
    <div className="cards-container flux">
      {sortedComics.map((comic) => (
        <div className="card" key={comic._id}>
          <img
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt={comic.title}
          />
          <p className="card-title">{comic.title}</p>
          <p>{comic.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ComicsCard;
