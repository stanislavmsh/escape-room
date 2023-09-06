import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthCheckedStatus, getAuthStatus } from '../../store/user-process/user-process.selectors';
import { getErrorStatus, getLoadingStatus } from '../../store/quests-data/quests-data.selectors';
import HistoryRouter from '../history-router/history-router';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import ContactsPage from '../../pages/contacts-page/contacts-page';
import BookingPage from '../../pages/booking-page/booking-page';
import MyQuestsPage from '../../pages/my-quests-page/my-quests-page';
import QuestPage from '../../pages/quest-page/quest-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoadingScreen from '../../pages/loading-page/loading-page';
import ErrorScreen from '../../pages/error-page/error-page';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';


export default function App() : JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const isDataLoading = useAppSelector(getLoadingStatus);
  const hasError = useAppSelector(getErrorStatus);

  if (!isAuthChecked || isDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  if(hasError) {
    return (
      <ErrorScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element = { <MainPage /> }
        />
        <Route
          path={AppRoute.Login}
          element = { <LoginPage /> }
        />
        <Route
          path={AppRoute.Contacts}
          element = { <ContactsPage /> }
        />
        <Route
          path={`${AppRoute.Quest}/:id${AppRoute.Booking}`}
          element = {
            <PrivateRoute authStatus={authorizationStatus}>
              <BookingPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.MyQuests}
          element = {
            <PrivateRoute authStatus={authorizationStatus}>
              <MyQuestsPage />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Quest}/:id`}
          element = {<QuestPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </HistoryRouter>
  );

}
