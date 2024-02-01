import { useNavigate } from 'react-router-dom';
import style from './filmCard.module.css';

export const FilmCard = ({ film }) => {
  const navigate = useNavigate();

  return (
    <div className={style.card}>
      <div className={style.card__image}>
        <img
          src={`https://shift-backend.onrender.com${film.img}`}
          alt="Превью фильма"
        />
      </div>
      <div className={style.card__information}>
        <div className={style.card__description}>
          <div className={style.card__title}>{film.name}</div>
          <div className={style.card__subtitle}>{film.originalName}</div>
        </div>
        <div className={style.card__rating}>
          <div className={style.rating__stars}>Stars</div>
          <div className={style.rating__kinopoisk}>
            Кинопопоиск - {film.userRatings.kinopoisk}
          </div>
        </div>
        <button
          onClick={() => {
            navigate(`/film/${film.id}`);
          }}
        >
          Подробнее
        </button>
      </div>
    </div>
  );
};
