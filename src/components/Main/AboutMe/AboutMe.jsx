import me from "../../../images/me.jpg";

function AboutMe() {
  return (
    <section className="student">
      <h2 className="student__title landing_title">Студент</h2>
      <div className="student__content">
      <img className="student__img" src={me} alt="me" />
        <div className="student__text">
          <h2 className="student__name">Вета</h2>
          <p className="student__specialty">Фронтенд-разработчик, 22 года </p>
          <p className="student__description">
            Я живу в Санкт-Петербурге. Я люблю петь, а ещё увлекаюсь косплеем,
            делаю фото и видео проекты. Работала в разных сферах и поняла,что
            душа лежит к программированию,особенно веб-разработка. Прошла курс
            Яндекс Практикума, делаю фриланс заказы и продолжаю изучать новые
            технологии.
          </p>
          <a
        className="student__gh"
        href="https://github.com/Veta322"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
        </div>
        
      </div>
    
    </section>
  );
}

export default AboutMe;
