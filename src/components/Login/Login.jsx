import React from "react";
import Form from '../Form/Form';
import useForm from '../hooks/useForm';
import { EMAIL_REGEX } from '../utils/constants';


function Login({ onAuthorize, isLoading }) {
  const { enteredValues, errors, handleChange, isFormValid } = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    onAuthorize({
      email: enteredValues.email,
      password: enteredValues.password,
    });
  }

  return (
    
    <Form
      title="Рады видеть!"
      buttonText="Войти"
      question="Еще не зарегистрированы?"
      linkText=" Регистрация"
      link="/signup"
      onSubmit={handleSubmit}
      isDisabled={!isFormValid}
      isLoading={isLoading}>
      <label className="form__field">
        E-mail
        <input
          name="email"
          className="form__input"
          id="email-input"
          type="email"
          required
          onChange={handleChange}
          pattern={EMAIL_REGEX}
          value={enteredValues.email || ''}
        />
        <span className="form__input-error">{errors.email}</span>
      </label>
      <label className="form__field">
        Пароль
        <input
          name="password"
          className="form__input"
          id="password-input"
          type="password"
          required
          onChange={handleChange}
          value={enteredValues.password || ''}
        />
        <span className="form__input-error">{errors.password}</span>
      </label>
    </Form>
  );
}

export default Login;



















/*
function Login() {
  return (
    <section className="login">
      <Link to="/">
        <img className="login__logo" alt="logo" src={logo} />
      </Link>
      <h2 className="login__greeting">Рады видеть!</h2>
      <form className="login__form">
        <label className="login__form-type">E-mail</label>
        <input className="login__form-input" placeholder="Введите ваш E-mail" required></input>
        <label className="login__form-type">Пароль</label>
        <input className="login__form-input" placeholder="Введите ваш пароль" required></input>
      </form>
      <button className="login__btn">Войти</button>
      <p className="login__text">
        {" "}
        Ещё не зарегистрированы?{" "}
        <Link to="/signup" className="login__signup">Регистрация</Link>{" "}
      </p>
    </section>
  );
}

export default Login;*/
