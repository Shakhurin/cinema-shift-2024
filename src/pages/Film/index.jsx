import { Link } from 'react-router-dom';
import style from './film.module.css';
import { useGetFilm } from '../../hooks/useGetFilm';

export const Film = () => {
  const { movie, isLoading } = useGetFilm();

  return (
    <>
      <div className={style.back}>
        <Link to="/">Назад</Link>
      </div>
      {isLoading ? (
        <div>Работаем, братья</div>
      ) : (
        <div className={style.wrapper}>
          {movie && (
            <>
              <div className={style.wrapper__filmInfo}>
                <div className={style.filmInfo__image}>
                  <img
                    src={`https://shift-backend.onrender.com${movie.img}`}
                    alt="Фото"
                  />
                </div>
                <div className={style.filmInfo__information}>
                  <div className={style.filmInfo__description}>
                    <div className={style.filmInfo__title}>{movie.name}</div>
                    <div className={style.filmInfo__subtitle}>
                      {movie.originalName}
                    </div>
                  </div>
                  <div className={style.filmInfo__rating}>
                    <div className={style.rating__stars}>Stars</div>
                    <div className={style.rating__kinopoisk}>
                      Kinopoisk - {movie.userRatings.kinopoisk}
                    </div>
                  </div>
                  <div className={style.filmInfo__description}>
                    {movie.description}
                  </div>
                </div>
              </div>
              <div className={style.schedule}></div>
              <div className={style.wrapper__seats}></div>
            </>
          )}
        </div>
      )}
    </>
  );
};
