function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__component">
        <a
          className="portfolio__link"
          href="https://veta322.github.io/how-to-learn/"
          target="blanck"
        >
          <p className="portfolio__text">Статичный сайт</p>
          <p className="portfolio__arrow">↗</p>
        </a>
        </li>
        <li className="portfolio__component">
        <a
          className="portfolio__link"
          href="https://veta322.github.io/russian-travel/"
          target="blanck"
        >
          <p className="portfolio__text">Адаптивный сайт</p>
          <p className="portfolio__arrow">↗</p>
        </a>
        </li>
        <li className="portfolio__component">
        <a
          className="portfolio__link"
          href="https://veta322.github.io/mesto/"
          target="blanck"
        >
          <p className="portfolio__text">Одностраничное приложение</p>
          <p className="portfolio__arrow">↗</p>
        </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
