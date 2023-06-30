import React, { useEffect, useContext, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import useForm from "../../hooks/useForm";
import { EMAIL_REGEX } from "../../utils/constants";
import Header from "../Header/Header";

function Profile({
  signOut,
  onUpdateUser,
  isLoggedIn,
  onMenuClick,
  isLoading,
}) {
  const currentUser = useContext(CurrentUserContext);

  const [lastValues, setLastValues] = useState(false);

  const { inputValues, errors, handleChange, isFormValid, resetForm } =
    useForm();

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: inputValues.name,
      email: inputValues.email,
    });
  }

  useEffect(() => {
    if (
      currentUser.name === inputValues.name &&
      currentUser.email === inputValues.email
    ) {
      setLastValues(true);
    } else {
      setLastValues(false);
    }
  }, [currentUser.email, currentUser.name, inputValues]);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} onMenuClick={onMenuClick} />
      <section className="profile">
        <h2 className="profile__greeting">Привет, {currentUser.name}!</h2>
        <form
          className="profile__info"
          id="form"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="profile__elem">
            <p className="profile__type">Имя</p>
            <input
              name="name"
              className="profile__mean"
              id="name-input"
              type="text"
              minLength="2"
              maxLength="30"
              required
              onChange={handleChange}
              value={inputValues.name || ""}
            ></input>
          </div>
          <span className="profile__input-error">{errors.name}</span>
          <div className="profile__elem">
            <p className="profile__type">E-mail</p>
            <input
              name="email"
              className="profile__mean"
              id="email-input"
              type="email"
              required
              onChange={handleChange}
              pattern={EMAIL_REGEX}
              value={inputValues.email || ""}
            />
          </div>
          <span className="profile__input-error">{errors.email}</span>
        </form>
        <button
          type="submit"
          className={
            !isFormValid || lastValues || isLoading
              ? "profile__edit profile__edit-disabled"
              : "profile__edit"
          }
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          Редактировать
        </button>
        <button type="button" className="profile__logout" onClick={signOut}>
          Выйти из аккаунта
        </button>
      </section>
    </>
  );
}

export default Profile;
