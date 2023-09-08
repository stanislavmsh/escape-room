import { Navigate, useLocation } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../utils/const';

type TPrivateRouteProps = {
  authStatus: AuthStatus;
  children: JSX.Element;
};

export default function PrivateRoute(props: TPrivateRouteProps): JSX.Element {
  const { authStatus, children } = props;

  const location = useLocation();

  return authStatus === AuthStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} replace state={{from: location}}/>
  );
}
