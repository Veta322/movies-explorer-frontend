import React from "react";
import Form from "../Form/Form";
import useForm from "../../hooks/useForm";
import { EMAIL_REGEX } from "../../utils/constants";

function Login({ onAuthorize, isLoading }) {
  const { inputValues, errors, handleChange, isFormValid } = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    onAuthorize({
      email: inputValues.email,
      password: inputValues.password,
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
      isLoading={isLoading}
    >
      <label className="form__type">Email</label>
      <input
        name="email"
        className="form__input"
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

export default Login;


