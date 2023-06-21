import FilterCheckbox from "../../FilterCheckbox/FilterCheckbox";
import React, { useState } from "react";


function SearchForm({ onSearchMovies, onFilter, isShortMovies }) {
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
