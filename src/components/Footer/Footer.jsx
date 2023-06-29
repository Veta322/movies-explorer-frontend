function Footer() {
    return (
      <footer className="footer">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__description">
            <p className="footer__elem  footer__gh">@ {(new Date().getFullYear())}</p>
            <div className="footer__source">
                <a className="footer__elem" href="https://practicum.yandex.ru/" target="blanck">Яндекс.Практикум</a>
                <a className="footer__elem" href="https://github.com/Veta322" target="blanck">Github</a>
            </div>
            </div>      
        </footer>
    );
  }
  
  export default Footer;