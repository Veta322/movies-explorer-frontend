import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__greeting">Привет, Вета!</h2>
      <div className="profile__info">
        <div className="profile__elem">
          <p className="profile__type">Имя</p>
          <p className="profile__mean">Вета</p>
        </div>
        <div className="profile__elem">
          <p className="profile__type">E-mail</p>
          <p className="profile__mean">vetakomolova@yandex.ru</p>
        </div>
      </div>
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
