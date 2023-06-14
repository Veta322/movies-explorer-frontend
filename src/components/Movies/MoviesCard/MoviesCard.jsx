import pic from "../../../images/pic.png";

function MoviesCard() {
  return (
    <div className="movie-card">
      <div className="movie-card__header">
        <h2 className="movie-card__title">В погоне за Бенкси</h2>
        <p className="movie-card__time">27 минут</p>
      </div>
      <img className="movie-card__img" alt="movie" src={pic} />
      <button className="movie-card__btn">Сохранить</button>
    </div>
  );
}

export default MoviesCard;

/*   <button className="movie-card__btn movie-card__btn_active">✓</button> */
