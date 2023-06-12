import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/circle.png";

function Register() {

  return (
    <section className="regist">
      <Link to="/">
        <img className="regist__logo" alt="logo" src={logo} />
      </Link>
      <h2 className="regist__greeting">Добро пожаловать!</h2>
      <form className="regist__form" >
        <label className="regist__form_type">Имя</label>
        <input className="regist__form_input"></input>
        <label className="regist__form_type">E-mail</label>
        <input className="regist__form_input"></input>
        <label className="regist__form_type">Пароль</label>
        <input className="regist__form_input"></input>
        <span className="regist__error">Что-то пошло не так...</span>
      </form>
      <button className="regist__btn">Зарегистрироваться</button>
      <p className="regist__text">
        {" "}
        Уже Зарегистрированы?{" "}
        <Link to="/signin" className="regist__signup">Войти</Link>{" "}
      </p>
    </section>
  );
}

export default Register;
