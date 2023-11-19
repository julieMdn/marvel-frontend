/* eslint-disable no-undef */
import "./comicsCard.css";

const ComicsCard = ({ data }) => {
  return (
    <div className="cards-container flux">
      {data.results.map((comic) => (
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
