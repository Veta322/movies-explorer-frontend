import React, { useEffect, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import useForm from "../hooks/useForm";
import { EMAIL_REGEX, USER_NAME_REGEX } from "../utils/constants";
import Header from "../Header/Header";

function Profile({
  signOut,
  onUpdateUser,
  isLoggedIn,
  onMenuClick,
  isLoading
}) {
  const currentUser = useContext(CurrentUserContext);

  const { enteredValues, errors, handleChange, isFormValid, resetForm } = useForm();
 

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: enteredValues.name,
      email: enteredValues.email,
    });
  }



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
              maxLength="40"
              required
              onChange={handleChange}
              value={enteredValues.name || ""}
              pattern={USER_NAME_REGEX}
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
              value={enteredValues.email || ""}
            />
          </div>
          <span className="profile__input-error">{errors.email}</span>
        </form>

        <div className={
          onUpdateUser
         ? "profile__status"
         : "profile__status  profile__status-active"
        }>
        <h2 className="profile__status-text">Профиль успешо обновлен</h2>
      </div>

        <button
          type="submit"
          className={
            !isFormValid || isLoading 
              ? 'profile__edit profile__edit-disabled'
              : 'profile__edit'
          }
          onClick={handleSubmit}
          disabled={!isFormValid ? true : false}
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
