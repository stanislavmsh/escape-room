import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';

type TPrivateRouteProps = {
  authStatus: AuthStatus;
  children: JSX.Element;
};

export default function PrivateRoute(props: TPrivateRouteProps): JSX.Element {
  const { authStatus, children } = props;

  return authStatus === AuthStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
}
