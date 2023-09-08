import { Link } from 'react-router-dom';
import React , { useCallback } from 'react';
import { AppRoute, AuthStatus } from '../../utils/const';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/user-process/user-process.selectors';
import { logoutAction } from '../../store/user-process/user-process.action';
import cn from 'classnames';

function Header() : JSX.Element {
  const dispatch = useAppDispatch();
  const currentLocation = useLocation().pathname;

  const userStatus = useAppSelector(getAuthStatus);
  const isLoggedIn = userStatus === AuthStatus.Auth;

  const handleLogout = useCallback(() => {
    dispatch(logoutAction());
  },[dispatch]);


  return(
    <header className="header">
      <div className="container container--size-l">
        <Link
          className="logo header__logo"
          to={AppRoute.Root}
          aria-label="Перейти на Главную"
        >
          <svg width={134} height={52} aria-hidden="true">
            <use xlinkHref="#logo" />
          </svg>
        </Link>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className='main-nav__item'>
              <Link className={cn('link' , {'active' : currentLocation === AppRoute.Root})} to={AppRoute.Root}>
                Квесты
              </Link>
            </li>
            <li className="main-nav__item">
              <Link className={cn('link' , {'active' : currentLocation === AppRoute.Contacts})} to={AppRoute.Contacts}>
                Контакты
              </Link>
            </li>
            {isLoggedIn &&
            <li className="main-nav__item">
              <Link className={cn('link' , {'active' : currentLocation === AppRoute.MyQuests})} to={AppRoute.MyQuests}>
                Мои бронирования
              </Link>
            </li>}
          </ul>
        </nav>
        <div className="header__side-nav">
          {
            currentLocation !== AppRoute.Login && (isLoggedIn
              ?
              <Link onClick={handleLogout} className="btn btn--accent header__side-item" to={AppRoute.Root}>
            Выйти
              </Link>
              :
              <Link className="btn header__side-item" to={AppRoute.Login}>
            Вход
              </Link>)
          }
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

const MemoizedHeader = React.memo(Header);

export default MemoizedHeader;
