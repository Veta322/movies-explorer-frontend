import React from 'react';
import { durationConverter } from '../../utils/utils';

function MoviesCard({ card, isSavedFilms, handleLikeClick, onCardDelete, saved, savedMovies }) {
  function onCardClick() {
    if (saved) {
      onCardDelete(savedMovies.filter((m) => m.movieId === card.id)[0]);
    } else {
      handleLikeClick(card);
    }
  }

  function onDelete() {
    onCardDelete(card);
  }

  const cardSaveButtonClassName = `${
    saved ? 'movie-card__btn movie-card__btn_active' : 'movie-card__btn'
  }`;


  return (
    <li className="movie-card">
      <div className="movie-card__header">
        <h2 className="movie-card__title">{card.nameRU}</h2>
        <p className="movie-card__time">{durationConverter(card.duration)}</p>
      </div>
      <a href={card.trailerLink} target="_blank" rel="noreferrer">
      <img className="movie-card__img" alt="movie" src={isSavedFilms ? card.image : `https://api.nomoreparties.co/${card.image.url}`} />
      </a>
      {isSavedFilms ? (
          <button type="button" className="movie-card__btn" onClick={onDelete}>✖</button>
        ) : (
          <button type="button" className={cardSaveButtonClassName} onClick={onCardClick}>Сохранить</button>
        )}
    </li>
  );
}

export default MoviesCard;


