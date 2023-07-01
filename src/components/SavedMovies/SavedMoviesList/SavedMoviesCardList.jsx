import SavedMoviesCard from "../SavedMoviesCard/SavedMoviesCard";

import SearchError from "../../SearchError/SearchError";

function SavedMoviesCardList({ cards, onCardDelete, isNotFound }) {
  return (
    <section className="movies">
      {isNotFound && <SearchError errorText={"Ничего не найдено ┐(シ)┌"} />}
      {!isNotFound && (
        <div className="movies-block">
          <ul className="movies-list">
            {cards.map((card) => (
              <SavedMoviesCard
                key={card._id}
                card={card}
                onCardDelete={onCardDelete}
              />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
export default SavedMoviesCardList;
