import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/circle.svg";

function Register() {
  return (
    <section className="regist">
      <Link to="/">
        <img className="regist__logo" alt="logo" src={logo} />
      </Link>
      <h2 className="regist__greeting">Добро пожаловать!</h2>
      <form className="regist__form">
        <label className="regist__form-type">Имя</label>
        <input
          className="regist__form-input"
          placeholder="Введите ваше имя"
          required
        ></input>
        <label className="regist__form-type">E-mail</label>
        <input
          className="regist__form-input"
          placeholder="Введите ваш E-mail"
          required
        ></input>
        <label className="regist__form-type">Пароль</label>
        <input
          className="regist__form-input"
          placeholder="Придумайте пароль"
          required
        ></input>
        <span className="regist__error">Что-то пошло не так...</span>
      </form>
      <button className="regist__btn">Зарегистрироваться</button>
      <p className="regist__text">
        {" "}
        Уже Зарегистрированы?{" "}
        <Link to="/signin" className="regist__signup">
          Войти
        </Link>{" "}
      </p>
    </section>
  );
}

export default Register;
