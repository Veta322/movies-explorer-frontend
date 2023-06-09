import React from "react";

import Form from "../Form/Form";
import useForm from "../../hooks/useForm";
import { EMAIL_REGEX } from "../../utils/constants";

function Register({ onRegister, isLoading }) {
  const { inputValues, errors, handleChange, isFormValid } = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({
      name: inputValues.name,
      email: inputValues.email,
      password: inputValues.password,
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
      isLoading={isLoading}
    >
      <label className="form__type">Имя</label>
      <input
        name="name"
        className="form__input"
        placeholder="Введите ваше имя"
        id="name-input"
        type="text"
        minLength="2"
        maxLength="40"
        required
        onChange={handleChange}
        value={inputValues.name || ""}
      />
      <span className="form__input-error">{errors.name}</span>

      <label className="form__type">E-mail</label>
      <input
        name="email"
        className="form__input"
        placeholder="Введите ваш E-mail"
        id="email-input"
        type="email"
        required
        onChange={handleChange}
        pattern={EMAIL_REGEX}
        value={inputValues.email || ""}
      />
      <span className="form__input-error">{errors.email}</span>

      <label className="form__type">Пароль</label>
      <input
        name="password"
        className="form__input"
        placeholder="Придумайте ваш пароль"
        id="password-input"
        type="password"
        required
        onChange={handleChange}
        value={inputValues.password || ""}
      />
      <span className="form__input-error">{errors.password}</span>
    </Form>
  );
}

export default Register;
