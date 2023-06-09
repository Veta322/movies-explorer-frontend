import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/circle.svg";

function Form({
  children,
  title,
  buttonText,
  question,
  linkText,
  link,
  onSubmit,
  isDisabled,
  isLoading,
}) {
  return (
    <div className="form__container">
      <Link to="/" className="form__logo">
        <img src={logo} alt="лого" />
      </Link>
      <h3 className="form__greeting">{title}</h3>
      <form className="form" id="form" onSubmit={onSubmit} noValidate>
        {children}
        <button
          type="submit"
          disabled={isDisabled ? true : false}
          className={
            isDisabled || isLoading
              ? "form__button-save form__button-disabled"
              : "form__button-save"
          }
        >
          {buttonText}
        </button>
      </form>
      <p className="form__text">
        {question}
        <Link to={link} className="form__link">
          {linkText}
        </Link>
      </p>
    </div>
  );
}

export default Form;
