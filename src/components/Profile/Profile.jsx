
import React, { useEffect, useContext, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useForm from '../hooks/useForm';
import { EMAIL_REGEX, USER_NAME_REGEX } from '../utils/constants';
import Header from "../Header/Header";


function Profile({ signOut, onUpdateUser, isLoggedIn, isLoading, onMenuClick}) {
  const currentUser = useContext(CurrentUserContext);

  const { enteredValues, errors, handleChange, isFormValid, resetForm } = useForm();
  const [isLastValues, setIsLastValues] = useState(false);

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

  useEffect(() => {
    if (currentUser.name === enteredValues.name && currentUser.email === enteredValues.email) {
      setIsLastValues(true);
    } else {
      setIsLastValues(false);
    }
  }, [enteredValues]);
  
  return (
    <><Header isLoggedIn={isLoggedIn} onMenuClick={onMenuClick}/><section className="profile">
      <h2 className="profile__greeting">Привет, {currentUser.name}!</h2>
      <form className="profile__info" id="form" onSubmit={handleSubmit} noValidate>
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
            value={enteredValues.name || ''}
            pattern={USER_NAME_REGEX}
          ></input>
          <span className="profile__input-error">{errors.name}</span>
        </div>
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
            value={enteredValues.email || ''} />
          <span className="profile__input-error">{errors.email}</span>
        </div>
      </form>
      <button type="submit" className="profile__edit" onClick={handleSubmit}  disabled={!isFormValid ? true : false} >
        Редактировать
      </button>
      <button  type="button" className="profile__logout" onClick={signOut}>
        Выйти из аккаунта
      </button>
    </section></>
  );
}

export default Profile;
