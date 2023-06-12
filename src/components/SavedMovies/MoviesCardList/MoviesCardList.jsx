import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
    return (
      <section className="movies-block">
      <div className="movies-list">
   <MoviesCard/>
   <MoviesCard/>
   <MoviesCard/>
   <MoviesCard/>
   <MoviesCard/>
   <MoviesCard/>
   <MoviesCard/> 
   <MoviesCard/> 
 </div>
 <button className="movies-list__btn">Ещё</button>
 </section>
    );
  }
  
  export default MoviesCardList;