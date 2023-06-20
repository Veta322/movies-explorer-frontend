function Footer() {
    return (
      <footer className="footer">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__description">
            <p className="footer__elem  footer__gh">@ {(new Date().getFullYear())}</p>
            <div className="footer__source">
                <p className="footer__elem">Яндекс.Практикум</p>
                <p className="footer__elem">Github</p>
            </div>
            </div>      
        </footer>
    );
  }
  
  export default Footer;