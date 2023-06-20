import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Movies(props) {
  return (
    <>
      <Header onMenuClick={props.onMenuClick} />
      <main className="movies">
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
