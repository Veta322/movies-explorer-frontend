import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <div className="search">
      <form className="search__form">
        <input className="search__form-input" placeholder="Фильм" required />
        <button className="search__form-btn" />
      </form>
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;
