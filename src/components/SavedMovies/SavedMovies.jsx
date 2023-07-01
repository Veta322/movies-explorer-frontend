import React, { useState, useEffect } from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import SavedMoviesCardList from "../SavedMovies/SavedMoviesList/SavedMoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { filterMovies, filterDuration } from "../../utils/utils";

function SavedMovies({ isLoggedIn, savedMovies, onCardDelete, onMenuClick }) {
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  function onSearchMovies(query) {
    setSearchQuery(query);
  }

  function handleShortMovies() {
    setIsShortMovies(!isShortMovies);
  }

  useEffect(() => {
    const moviesList = filterMovies(savedMovies, searchQuery);
    setFilteredMovies(isShortMovies ? filterDuration(moviesList) : moviesList);
  }, [savedMovies, isShortMovies, searchQuery]);

  useEffect(() => {
    if (filteredMovies.length === 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} onMenuClick={onMenuClick} />
      <main className="movies">
        <SearchForm
          onSearchMovies={onSearchMovies}
          onFilter={handleShortMovies}
        />
        <SavedMoviesCardList
          cards={filteredMovies}
          onCardDelete={onCardDelete}
          isNotFound={isNotFound}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
