import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import LoginForm from '../../components/login-form/login-form';
import { useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/user-process/user-process.selectors';
import { Navigate } from 'react-router-dom';
import { AppRoute , AuthStatus } from '../../const';

export default function LoginPage(): JSX.Element {

  const userLoginStatus = useAppSelector(getAuthStatus);

  if (userLoginStatus === AuthStatus.Auth) {
    return <Navigate to={AppRoute.Root}/>;
  }

  return(
    <div className="wrapper">
      <Header />
      <main className="decorated-page login">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x"
            />
            <img
              src="img/content/maniac/maniac-size-m.jpg"
              srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x"
              width={1366}
              height={768}
              alt=""
            />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="login__form">
            <LoginForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>

  );
}
