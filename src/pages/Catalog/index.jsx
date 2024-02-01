import { FilmCard } from '../../components/FilmCard';
import style from './catalog.module.css';
import { useGetAllFilms } from '../../hooks/useGetAllFilms';

export const Catalog = () => {
  const filmList = useGetAllFilms();

  return (
    <div className={style.afisha}>
      <div className={style.afisha__article}>Афиша</div>
      <div className={style.afisha__list}>
        {filmList.length > 0
          ? filmList.map((film) => {
              return <FilmCard film={film} key={film.id} />;
            })
          : 'Ищу заглушку'}
      </div>
    </div>
  );
};
