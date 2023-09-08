import Cards from '../../components/cards/cards';
import Footer from '../../components/footer/footer';
import MemoizedHeader from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchReservationAction } from '../../store/quests-data/quests-data.action';
import { getReservations } from '../../store/quests-data/quests-data.selectors';
import { useEffect } from 'react';

export default function MyQuestsPage () : JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchReservationAction());
  },[dispatch]);

  const reservations = useAppSelector(getReservations);

  return(
    <div className="wrapper">
      <MemoizedHeader />
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"
            />
            <img
              src="img/content/maniac/maniac-bg-size-m.jpg"
              srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x"
              width={1366}
              height={1959}
              alt=""
            />
          </picture>
        </div>
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="title title--size-m page-content__title">
            Мои бронирования
            </h1>
          </div>
          <Cards questsList={reservations} isReservations/>
        </div>
      </main>
      <Footer />
    </div>

  );

}
