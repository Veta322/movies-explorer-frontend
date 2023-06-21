import React from "react";
import { durationConverter } from "../../utils/utils";

function MoviesCard({ card, isSavedFilms, onCardDelete }) {
  function onDelete() {
    onCardDelete(card._id);
  }

  return (
    <li className="movie-card">
      <div className="movie-card__header">
        <h2 className="movie-card__title">{card.nameRU}</h2>
        <p className="movie-card__time">{durationConverter(card.duration)}</p>
      </div>
      <a href={card.trailerLink} target="_blank" rel="noreferrer">
        <img className="movie-card__img" alt="movie" src={card.image} />
      </a>
      <button type="button" className="movie-card__btn" onClick={onDelete}>
        ✖
      </button>
    </li>
  );
}

export default MoviesCard;
