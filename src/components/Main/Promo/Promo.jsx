import circle from "../../../images/circle.svg";
import web from "../../../images/promo_img.svg";
import { Link } from "react-router-dom";

function Promo() {
  return (
    <section className="promo">
    
      <section className="promo__content">
        <img className="promo__content-image" alt="web" src={web} />
        <div className="promo__text">
          <h1 className="promo__text-tittle">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="promo__text-subtittle">
            Листайте ниже, чтобы узнать больше про этот проект и&nbsp;его
            создателя.
          </p>
          <Link to="/movies" className="promo__btn">
          Узнать больше
          </Link>
        </div>
      </section>
    </section>
  );
}

export default Promo;
