import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../../Preloader/Preloader";
import SearchError from "../../SearchError/SearchError";
import React, { useEffect, useState } from 'react';
import { SHOW_MORE_DECKTOP, SHOW_MORE_TABLET, SHOW_MORE_MOBILE,DISPLAY_TABLET,DISPLAY_DECKTOP } from '../../utils/constants';


function MoviesCardList({
  cards,
  handleLikeClick,
  savedMovies,
  onCardDelete,
  isLoading,
  isReqErr,
  isNotFound,
}) {
  const [shownMovies, setShownMovies] = useState(0);

  function shownCount() {
    const display = window.innerWidth;
    if (display > DISPLAY_DECKTOP) {
      setShownMovies(12);
    } else if (display >= DISPLAY_TABLET) {
      setShownMovies(8);
    } else if (display < DISPLAY_TABLET) {
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
    if (display > DISPLAY_DECKTOP) {
      setShownMovies(shownMovies + SHOW_MORE_DECKTOP);
    } else if (display >= DISPLAY_TABLET) {
      setShownMovies(shownMovies + SHOW_MORE_TABLET);
    }
    else if (display < DISPLAY_TABLET) {
      setShownMovies(shownMovies + SHOW_MORE_MOBILE);
    }
  }

  function onDelete(card) {
      onCardDelete(getSavedCard(card)._id)
  }

  // Возвращает сохраненную карточку
  function getSavedCard(card) {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id.toString());
  }

  // Возвращает true, если card - сохраненный фильм, иначе false
  function isCardSaved(card) {
    return savedMovies.some((savedMovie) => savedMovie.movieId === card.id.toString());
  }


  return (
    <section className="movies">
      {isLoading && <Preloader />} 
      {!isLoading && isNotFound && <SearchError errorText={'Ничего не найдено ┐(シ)┌'} />}
      {!isLoading && isReqErr &&(
        <SearchError
          errorText={
            'Произошла ошибка на сервере :('
          }
        />
      )}
      
      {!isLoading && !isNotFound && !isReqErr && (
             <div className="movies-block">
              <ul className="movies-list">
                {cards.slice(0, shownMovies).map((card) => (
                  <MoviesCard
                    key={card.id}
                    saved={isCardSaved(card)}
                    card={card}
                    handleLikeClick={handleLikeClick}
                    onCardDelete={onDelete}
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
             </div>
             )}
    </section>
  );
}

export default MoviesCardList;
