import Navigation from "../Navigation/Navigation";

function MenuPopup({ isOpen, onClose }) {
  return (
    <div className={`menu-popup ${isOpen ? "menu-popup_opened" : ""}`}>
      <div className="menu-popup__container">
        <div className="burger burger_open" onClick={onClose}>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
        <Navigation onClose={onClose} />
      </div>
    </div>
  );
}

export default MenuPopup;
