import React from "react";

function FilterCheckbox({ onFilter, isShortMovies }) {
  return (
    <div className="checkbox">
      <p className="checkbox__name">Короткометражки</p>
      <div className="checkbox__wrapper">
        <input
          className="toggle toggle-light"
          id="cb1-6"
          type="checkbox"
          onChange={onFilter}
          checked={isShortMovies}
        />
        <label className="toggle-btn" for="cb1-6" />
      </div>
    </div>
  );
}

export default FilterCheckbox;
