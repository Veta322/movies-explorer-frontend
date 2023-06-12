function Portfolio() {
    return (
      <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__component">
        <p className="portfolio__text">Статичный сайт</p>
        <p className="portfolio__arrow">↗</p>
      </div>
      <div className="portfolio__component">
        <p className="portfolio__text">Адаптивный сайт</p>
        <p className="portfolio__arrow">↗</p>
      </div>
      <div className="portfolio__component">
        <p className="portfolio__text">Одностраничное приложение</p>
        <p className="portfolio__arrow">↗</p>
      </div>
      </section>
    );
  }
  
  export default Portfolio;