import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__greeting">Привет, Вета!</h2>
      <form className="profile__info">
        <div className="profile__elem">
          <p className="profile__type">Имя</p>
          <input className="profile__mean" value="Вета" disabled></input>
        </div>
        <div className="profile__elem">
          <p className="profile__type">E-mail</p>
          <input className="profile__mean" value="vetakomolova@yandex.ru" disabled></input>
        </div>
      </form>
      <Link to="/profile" className="profile__edit">
        Редактировать
      </Link>
      <Link to="/profile" className="profile__logout">
        Выйти из аккаунта
      </Link>
    </section>
  );
}

export default Profile;
