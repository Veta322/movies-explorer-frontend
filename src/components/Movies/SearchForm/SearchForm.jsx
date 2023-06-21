import FilterCheckbox from "../../FilterCheckbox/FilterCheckbox";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function SearchForm({ onSearchMovies, onFilter, isShortMovies }) {
  const [isQueryError, setIsQueryError] = useState(false);
  const [query, setQuery] = useState("");
  const location = useLocation();

  function handleChangeQuery(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (query.trim().length === 0) {
      setIsQueryError(true);
    } else {
      setIsQueryError(false);
      onSearchMovies(query);
    }
  }

  useEffect(() => {
    if (
      location.pathname === "/movies" &&
      localStorage.getItem("movieSearch")
    ) {
      const localQuery = localStorage.getItem("movieSearch");
      setQuery(localQuery);
    }
  }, [location]);

  return (
    <div className="search">
      <form className="search__form" id="form" onSubmit={handleSubmit}>
        <input
          name="query"
          className="search__form-input"
          id="search-input"
          type="text"
          placeholder="Фильм"
          onChange={handleChangeQuery}
          value={query || ""}
          required
        />
        <button className="search__form-btn" type="submit" />
      </form>
      <FilterCheckbox onFilter={onFilter} isShortMovies={isShortMovies} />
      {isQueryError && (
        <span className="search__form-error">Нужно ввести ключевое слово</span>
      )}
    </div>
  );
}

export default SearchForm;
