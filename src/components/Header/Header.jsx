import logo from "../../images/circle.svg";
import profile from "../../images/profile.svg";
import { Link } from "react-router-dom";

function Header({ onMenuClick }) {
  return (
    <header className="header">
      <div className="header__navigate">
        <Link to="/">
          <img className="header__logo" alt="logo" src={logo} />
        </Link>
        <Link to="/movies" className="header__link">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="header__link">
          Сохранённые фильмы
        </Link>
      </div>
        <Link to="/profile" className="header__profile header__link">
          <p className="header__link_profile">Аккаунт</p>
          <img className="header__profile_img" alt="profile" src={profile} />
        </Link>
        <div className="header__burger" onClick={onMenuClick}>
          <span className="header__burger_line"></span>
          <span className="header__burger_line"></span>
          <span className="header__burger_line"></span>
        </div>
    </header>
  );
}

export default Header;
