import { Link } from "react-router-dom";
import profile from "../../images/profile.svg";

function Navigation({ onClose }) {
  return (
    <section className="navigation">
      <Link className="navigation__link" to="/" onClick={onClose}>
        Главная
      </Link>
      <Link className="navigation__link" to="/movies" onClick={onClose}>
        Фильмы
      </Link>
      <Link className="navigation__link" to="/saved-movies" onClick={onClose}>
        Сохранённые фильмы
      </Link>

      <Link to="/profile" className="navigation__profile" onClick={onClose}>
        <p className="navigation__link-profile">Аккаунт</p>
        <img className="navigation__profile-img" alt="profile" src={profile} />
      </Link>
    </section>
  );
}

export default Navigation;
