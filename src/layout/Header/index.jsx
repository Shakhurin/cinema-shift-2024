import style from './header.module.css';
import logo from '../../assets/headerSVG/cinemaLogo.svg';
import exit from '../../assets/headerSVG/exit.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header__left}>
        <Link to="">
          <img src={logo} alt="Логотип" />
        </Link>
        <Link to="#">Профиль</Link>
        <Link to="#">Билеты</Link>
      </div>
      <div className={style.header__right}>
        <Link to="#">
          <img src={exit} alt="Иконка выхода" />
          Выход
        </Link>
      </div>
    </header>
  );
};
