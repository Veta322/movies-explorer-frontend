import { Link } from "react-router-dom";
import profile from "../../images/profile.svg";


function Navigation({ onClose }) {
  return (
    <div className="navigation">
      <Link className="navigation__link" to="/" onClick={onClose}>
        Главная
      </Link>
      <Link className="navigation__link" to="/movies" onClick={onClose}>
        Фильмы
      </Link>
      <Link className="navigation__link" to="/saved-movies" onClick={onClose}>
        Сохранённые фильмы
      </Link>
      
        <Link to="/profile" className="navigation__profile" onClick={onClose} >
          <p className="navigation__link_profile">Аккаунт</p>
          
          <img className="navigation__profile_img" alt="profile" src={profile} />
        </Link>
       
     

    </div>
  );
}

export default Navigation;