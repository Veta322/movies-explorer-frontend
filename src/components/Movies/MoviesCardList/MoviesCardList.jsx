import MoviesCard from "../MoviesCard/MoviesCard";
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SHOW_MORE_DECKTOP, SHOW_MORE_TABLET, SHOW_MORE_MOBILE } from '../../utils/constants';


function MoviesCardList({
  cards,
  isSavedFilms,
  isLoading,
  isReqErr,
  isNotFound,
  handleLikeClick,
  savedMovies,
  onCardDelete,
}) {
  const [shownMovies, setShownMovies] = useState(0);
  const { pathname } = useLocation();

  function shownCount() {
    const display = window.innerWidth;
    if (display > 1180) {
      setShownMovies(16);
    } else if (display > 1023) {
      setShownMovies(12);
    } else if (display > 800) {
      setShownMovies(8);
    } else if (display < 800) {
      setShownMovies(5);
    }
  }

  useEffect(() => {
    shownCount();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('resize', shownCount);
    }, 500);
  });

  function showMore() {
    const display = window.innerWidth;
    if (display > 1180) {
      setShownMovies(shownMovies + SHOW_MORE_DECKTOP);
    } else if (display > 1023) {
      setShownMovies(shownMovies + SHOW_MORE_TABLET);
    }
    else if (display < 1023) {
      setShownMovies(shownMovies + SHOW_MORE_MOBILE);
    }
  }

  function getSavedMovieCard(savedMovies, card) {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
  }

  return (
    <section className="movies">
   
      {!isLoading && !isReqErr && !isNotFound && (
        <>
          {pathname === '/saved-movies' ? (
           <section className="movies-block">
              <ul className="movies-list">
                {cards.map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    saved={getSavedMovieCard(savedMovies, card)}
                    cards={cards}
                    card={card}
                    isSavedFilms={isSavedFilms}
                    handleLikeClick={handleLikeClick}
                    onCardDelete={onCardDelete}
                    savedMovies={savedMovies}
                  />
                ))}
              </ul>
              
              </section>
          ) : (
            
             <section className="movies-block">
              <ul className="movies-list">
                {cards.slice(0, shownMovies).map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    saved={getSavedMovieCard(savedMovies, card)}
                    cards={cards}
                    card={card}
                    isSavedFilms={isSavedFilms}
                    handleLikeClick={handleLikeClick}
                    onCardDelete={onCardDelete}
                    savedMovies={savedMovies}
                  />
                ))}
              </ul>
                {cards.length > shownMovies ? (
                  <button className="movies-list-btn" onClick={showMore}>
                    Ещё
                  </button>
                ) : (
                  ''
                )}
             
             </section>
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
