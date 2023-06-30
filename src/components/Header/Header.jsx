import logo from "../../images/circle.svg";
import profile from "../../images/profile.svg";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header({ isLoggedIn, onMenuClick }) {
  const { pathname } = useLocation();
  return (
    <>
      {!isLoggedIn ? (
        <header className="promo__header">
          <img className="promo__logo" alt="circle" src={logo} />
          <div className="promo__links">
            <Link to="/signup" className="promo__link">
              Регистрация
            </Link>
            <Link to="/signin" className="promo__link promo__link_black">
              Войти
            </Link>
          </div>
        </header>
      ) : (
        <header className="header">
          <div className="header__navigate">
            <Link to="/">
              <img className="header__logo" alt="logo" src={logo} />
            </Link>
            <Link
              to="/movies"
              className={
                pathname === "/movies"
                  ? "header__link header__link-active"
                  : "header__link"
              }
            >
              Фильмы
            </Link>
            <Link
              to="/saved-movies"
              className={
                pathname === "/saved-movies"
                  ? "header__link header__link-active"
                  : "header__link"
              }
            >
              Сохранённые фильмы
            </Link>
          </div>
          <Link to="/profile" className="header__profile header__link">
            <p className="header__link-profile">Аккаунт</p>
            <img className="header__profile-img" alt="profile" src={profile} />
          </Link>
          <div className="burger" onClick={onMenuClick}>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
