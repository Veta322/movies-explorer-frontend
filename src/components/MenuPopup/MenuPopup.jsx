import Navigation from "../Navigation/Navigation";

function MenuPopup({ isOpen, onClose }) {
  return (
    <div className={`menu-popup ${isOpen ? "menu-popup_opened" : ""}`}>
      <div className="menu-popup__container">
      <div
                  className="header__burger header__burger_open" 
                  onClick={onClose}
                >
                  <span className="header__burger_line"></span>
                  <span className="header__burger_line"></span>
                  <span className="header__burger_line"></span>
                </div>
        <Navigation onClose={onClose} />
      </div>
    </div>
  );
}

export default MenuPopup;
