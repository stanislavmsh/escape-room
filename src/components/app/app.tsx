import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import ContactsPage from '../../pages/contacts-page/contacts-page';
import BookingPage from '../../pages/booking-page/booking-page';
import MyQuestsPage from '../../pages/my-quests-page/my-quests-page';
import QuestPage from '../../pages/quest-page/quest-page';


export default function App() : JSX.Element {

  return (
    <BrowserRouter>
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
          element = { <BookingPage /> }
        />
        <Route
          path={AppRoute.MyQuests}
          element = { <MyQuestsPage /> }
        />
        <Route
          path={`${AppRoute.Quest}/:id`}
          element = {<QuestPage />}
        />
      </Routes>
    </BrowserRouter>
  );

}
