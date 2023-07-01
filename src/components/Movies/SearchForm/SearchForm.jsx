import FilterCheckbox from "../../FilterCheckbox/FilterCheckbox";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function SearchForm({ onSearchMovies, onFilter, isShortMovies }) {
  const location = useLocation();
  const [query, setQuery] = useState("");

  function handleChangeQuery(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (query.trim().length === 0) {
    } else {
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
    </div>
  );
}

export default SearchForm;
