import React from "react";

import Form from '../Form/Form';
import useForm from '../hooks/useForm';
import { EMAIL_REGEX, USER_NAME_REGEX } from '../utils/constants';

function Register({ onRegister, isLoading }) {
  const { enteredValues, errors, handleChange, isFormValid } = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({
      name: enteredValues.name,
      email: enteredValues.email,
      password: enteredValues.password,
    });
  }
  return (
    <Form
    title="Добро пожаловать!"
    buttonText="Зарегистрироваться"
    question="Уже зарегистрированы?"
    linkText=" Войти"
    link="/signin"
    onSubmit={handleSubmit}
    isDisabled={!isFormValid}
    isLoading={isLoading}>
        <label className="regist__form-type">Имя</label>
        <input
        name="name"
          className="regist__form-input"
          placeholder="Введите ваше имя"
          id="name-input"
          type="text"
          minLength="2"
          maxLength="40"
          required
          onChange={handleChange}
          value={enteredValues.name || ''}
          pattern={USER_NAME_REGEX}
        ></input>
        <span className="form__input-error">{errors.password}</span>
        <label className="regist__form-type">E-mail</label>
        <input
         name="email"
          className="regist__form-input"
          placeholder="Введите ваш E-mail"
          id="email-input"
          type="email"
          required
          onChange={handleChange}
          pattern={EMAIL_REGEX}
          value={enteredValues.email || ''}
        ></input>
        <span className="form__input-error">{errors.password}</span>
        <label className="regist__form-type">Пароль</label>
        <input
         name="password"
          className="regist__form-input"
          placeholder="Придумайте пароль"
          id="password-input"
          type="password"
          required
          onChange={handleChange}
          value={enteredValues.password || ''}
        ></input>
        <span className="form__input-error">{errors.password}</span>
      </Form>
  );
}

export default Register;
