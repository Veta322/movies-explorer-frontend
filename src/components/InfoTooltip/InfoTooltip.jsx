import React from "react";
import neoke from "../../images/neoke.webp";
import oke from "../../images/oke.webp";

function InfoTooltip({ onClose, isSuccess, isUpdate }) {
  return (
    <div className={`popup ${!isSuccess ? "popup_open" : ""}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
        />
        {isUpdate ? (
          <>
            <img className="popup_image" src={oke} alt="status" />
            <h2 className="popup__title">Редактирование прошло успешно!</h2>
          </>
        ) : (
          <>
            <img className="popup_image" src={neoke} alt="status" />
            <h2 className="popup__title">Что-то пошло не так...</h2>
          </>
        )}
      </div>
    </div>
  );
}

export default InfoTooltip;
