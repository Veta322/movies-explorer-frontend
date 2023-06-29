import React from "react";
import { durationConverter } from "../../../utils/utils";

function MoviesCard({
  card,
  handleLikeClick,
  onCardDelete,
  saved
}) {
  function onCardClick() {
    handleLikeClick(card);
  }

  function onDelete() {
    onCardDelete(card);
  }

  return (
    <li className="movie-card">
      <div className="movie-card__header">
        <h2 className="movie-card__title">{card.nameRU}</h2>
        <p className="movie-card__time">{durationConverter(card.duration)}</p>
      </div>
      <a href={card.trailerLink} target="_blank" rel="noreferrer">
        <img
          className="movie-card__img"
          alt="movie"
          src={`https://api.nomoreparties.co/${card.image.url}`}
        />
      </a>
      {saved ? (
        <button
          type="button"
          className="movie-card__btn movie-card__btn_active"
          onClick={onDelete}
        >
          ✓
        </button>
      ) : (
        <button type="button" className="movie-card__btn" onClick={onCardClick}>
          Сохранить
        </button>
      )}
    </li>
  );
}

export default MoviesCard;
