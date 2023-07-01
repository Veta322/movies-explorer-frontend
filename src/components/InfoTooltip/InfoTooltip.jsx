import React from "react";

function InfoTooltip(props) {
  return (
    <div
    className={`popup ${props.isOpen ? "popup_open" : ""}`}
    onClick={props.onCloseClick}
  >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          onClick={props.onClose}
        />
          <img className="popup__image" src={props.image} alt={props.title} />
          <h2 className="popup__title">{props.title}</h2>
        </div>
      </div>
  );
}

export default InfoTooltip;
