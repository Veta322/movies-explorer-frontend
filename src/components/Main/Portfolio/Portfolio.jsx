
/* Зачем здесь лишняя обертка списка? Тут обернуты в ссылки компоменты */
function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <a
        className="portfolio__component"
        href="https://veta322.github.io/how-to-learn/"
        target="blanck"
      >
        <p className="portfolio__text">Статичный сайт</p>
        <p className="portfolio__arrow">↗</p>
      </a>
      
      <a className="portfolio__component"
        href="https://veta322.github.io/russian-travel/"
        target="blanck">
        <p className="portfolio__text">Адаптивный сайт</p>
        <p className="portfolio__arrow">↗</p>
      </a>
      <a className="portfolio__component"
        href="https://veta322.github.io/mesto/"
        target="blanck">
        <p className="portfolio__text">Одностраничное приложение</p>
        <p className="portfolio__arrow">↗</p>
      </a>
    </section>
  );
}

export default Portfolio;

