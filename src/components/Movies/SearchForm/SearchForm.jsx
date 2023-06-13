import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import find from "../../../images/find.svg";

function SearchForm() {
  return (
    <div className="search">
      <form className="search__form">
        <input className="search__form_input" placeholder="Фильм"/>
        <img className="search__form_img" alt="search" src={find} />
      </form>
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;
