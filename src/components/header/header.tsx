import { Link } from 'react-router-dom';
// import { useState } from 'react';
import { AppRoute } from '../../const';
import { useLocation } from 'react-router-dom';
import cn from 'classnames';

export default function Header() : JSX.Element {

  const currentLocation = useLocation().pathname;

  return(
    <header className="header">
      <div className="container container--size-l">
        <a
          className="logo header__logo"
          href="index.html"
          aria-label="Перейти на Главную"
        >
          <svg width={134} height={52} aria-hidden="true">
            <use xlinkHref="#logo" />
          </svg>
        </a>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className='main-nav__item'>
              <Link className={cn('link not-disabled' , {'active' : currentLocation === AppRoute.Root})} to={AppRoute.Root}>
                Квесты
              </Link>
            </li>
            <li className="main-nav__item">
              <Link className={cn('link' , {'active' : currentLocation === AppRoute.Contacts})} to={AppRoute.Contacts}>
                Контакты
              </Link>
            </li>
            <li className="main-nav__item">
              <Link className={cn('link' , {'active' : currentLocation === AppRoute.MyQuests})} to={AppRoute.MyQuests}>
                Мои бронирования
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header__side-nav">
          <a className="btn btn--accent header__side-item" href="#">
            Выйти
          </a>
          <a
            className="link header__side-item header__phone-link"
            href="tel:88003335599"
          >
            8 (000) 111-11-11
          </a>
        </div>
      </div>
    </header>
  );

}
