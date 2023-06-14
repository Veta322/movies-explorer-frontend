import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <div className="search">
      <form className="search__form">
        <input className="search__form_input" placeholder="Фильм" required />
        <button className="search__form_btn" alt="search" />
      </form>
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;
