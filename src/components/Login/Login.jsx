import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/circle.svg";

function Login() {
  return (
    <section className="login">
      <Link to="/">
        <img className="login__logo" alt="logo" src={logo} />
      </Link>
      <h2 className="login__greeting">Рады видеть!</h2>
      <div className="login__form">
        <label className="login__form_type">E-mail</label>
        <input className="login__form_input" placeholder="Введите ваш E-mail" required></input>
        <label className="login__form_type">Пароль</label>
        <input className="login__form_input" placeholder="Введите ваш пароль" required></input>
      </div>
      <button className="login__btn">Войти</button>
      <p className="login__text">
        {" "}
        Ещё не зарегистрированы?{" "}
        <Link to="/signup" className="login__signup">Регистрация</Link>{" "}
      </p>
    </section>
  );
}

export default Login;
